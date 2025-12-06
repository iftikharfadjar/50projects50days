import { cn } from "~/lib/utils"
// import { Component } from "solid-js";
import { createSignal, For, onMount } from "solid-js";


export const SplitLandPage = () => {
    const [hoverClass, setHoverClass] = createSignal('');
    const handleEnter = (side: string) => setHoverClass(`hover-${side}`);
    const handleLeave = () => setHoverClass('');
    return (
        <>
            <div class={cn("container-this", hoverClass())}>
                <div style={`background-image: url('ps.jpg')`} class="split left"
                    onMouseEnter={() => handleEnter("left")}
                    onMouseLeave={handleLeave}
                >
                    <h1>Playstation</h1>
                </div>

                <div class="split right"
                    onMouseEnter={() => handleEnter("right")}
                    onMouseLeave={handleLeave}
                >
                    <h1>XBox Series X </h1>
                </div>
            </div>
        </>
    )
}
