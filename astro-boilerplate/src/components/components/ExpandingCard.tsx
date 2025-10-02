import {cn} from "~/lib/utils"
// import { Component } from "solid-js";
import { createSignal, For } from "solid-js";

  type PanelDataType = {
    id: number,
    title: string,
    uri: string
  };

export const ExpandingCard  = () => {

    // const {active} = props.active
    const panel = cn("bg-cover bg-center bg-no-repeat h-[80vh] text-white rounded-[50px] cursor-pointer m-[10px] relative transition-all duration-[700ms] ease-in");
    const h3 = cn("text-2xl absolute bottom-5 left-5 m-0")

    const panelData : PanelDataType[] = [
        { id: 1,title:"Explore The World", uri: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
        { id: 2,title:"Wild Forest", uri: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
        { id: 3,title:"Sunny Beach", uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" },
        { id: 4,title:"City on Winter", uri: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" },
        { id: 5,title:"Mountains - Clouds", uri: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" },
      ];
      
      const [activePanel, setActivePanel] = createSignal<number>(0);

    return (
        <>
            <For each={panelData}>
                {(p) => (
                    <div class={cn(panel, (activePanel() == p.id)  ? "flex-[5]" : "flex-[0.5]")} 
                    style={`background-image: url('${p.uri}')`} 
                    onClick={() => (activePanel() == p.id) ?setActivePanel(0) : setActivePanel(p.id)}
                    >
                        <h3 class={cn(h3, (activePanel() == p.id)  ? " opacity-100" : " opacity-0")}>{p.title}</h3>
                    </div>
                )}
            </For>
    
        </>
    )
}