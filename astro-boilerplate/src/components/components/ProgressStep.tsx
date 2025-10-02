import {cn} from "~/lib/utils"
// import { Component } from "solid-js";
import { createSignal, For } from "solid-js";
// import "~/styles/02-progress-step.css";
import { Button } from "~/components/ui/button.tsx"

type PanelProps = {
    active?: boolean;
  };

  type btnListType = {
    id: number,
    label: string,
  };

export const ProgessStep  = (props : PanelProps) => {
  
    const [activePanel, setActivePanel] = createSignal<number>(1);

    const btnList : btnListType[] = [
        { id: 1,label:"1"},
        { id: 2,label:"2"} ,
        { id: 3,label:"3"} ,
        { id: 4,label:"4"},
        { id: 5,label:"5"},
      ];

     const progressLine = () => {
        let lenLine = ((activePanel() -1 ) / (btnList.length - 1) * 100)
        return  lenLine + '%'
    }

      const circleCss = cn("bg-[#f1f1f1] text-[#e2e2e2] rounded-full h-[30px] w-[30px] flex items-center justify-center border-[3px] transition-all duration-400 ease-in-out")

    return (
        <>
            <h1>{progressLine()}</h1>
            <div class="progress-container">
                <div class="progress" style={`width:${progressLine()}`}></div>
                <For each={btnList}>
                    {(p) => (
                        <div class={cn(circleCss, (activePanel() >= p.id)  ? "bg-[var(--line-border-fill)] text-white border-slate-700" : "border-[var(--line-border-empty)]")} >
                            {p.label}
                        </div>
                    )}
                </For>
            </div>

            <Button onClick={() => {
                if (activePanel() <= 1){
                    setActivePanel(btnList.length)
                }else{
                    setActivePanel(activePanel() - 1)
                }
                
            }} class="btn m-4" >Prev</Button>
            <Button onClick={() => {
                if (activePanel() >= btnList.length){
                    setActivePanel(1)
                }else{
                    setActivePanel(activePanel() + 1)
                }
                
            }}>Next</Button>
        
        </>
    )
}