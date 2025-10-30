import {cn} from "~/lib/utils"
// import { Component } from "solid-js";
import { createSignal, For, onMount  } from "solid-js";

  type backgroundType = {
    color: string,
    title: string,
    subTitle: string
  };

  type bgListType = Record<string, string>;

  type bgPairListType = [backgroundType, string]

export const DoubleSlideVertical   = () => {
  const bgList : bgListType = {
  "yellow":'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80'
  ,"black" : 'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80'
  ,"blue" : 'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80'
  ,"pink" : 'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80'
  }

  const bgPairList : bgPairListType[] = [
        [{color :"#FD3555", title : "Nature flower" , subTitle : "all in pink"}, bgList["yellow"]],
        [{color :"#2A86BA", title : "Bluuue Sky" , subTitle : "with it's mountains"}, bgList["black"]],
        [{color :"#252E33", title : "Lonely castle" , subTitle : "in the wilderness"}, bgList["blue"]],
        [{color :"#FFB866", title : "Flying eagle" , subTitle : "in the sunset"}, bgList["pink"]],
   ]

   let sliderContainer;
   let slideRight;
   let slideLeft;

   const [activeSlideIndex, setActiveSlideIndex] = createSignal(0);
   const [slidesLength, setSlidesLength] = createSignal(0);

   onMount(() => {
      const rightDivs = slideRight.querySelectorAll("div");
      setSlidesLength(rightDivs.length);
      slideLeft.style.top = `-${(rightDivs.length - 1) * 100}vh`;
    });

   const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    let newIndex = activeSlideIndex();

    if (direction === "up") {
      newIndex = newIndex + 1 >= slidesLength() ? 0 : newIndex + 1;
    } else if (direction === "down") {
      newIndex = newIndex - 1 < 0 ? slidesLength() - 1 : newIndex - 1;
    }

    setActiveSlideIndex(newIndex);

    slideRight.style.transform = `translateY(-${newIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${newIndex * sliderHeight}px)`;
  }

   return (
    <>
      <div ref={sliderContainer} class="relative overflow-hidden w-screen h-screen">
          {/* Left side */}
          <div ref={slideRight} class="absolute top-0 left-0 h-full w-[35%] transition-transform duration-500 ease-in-out">
            <For each={bgPairList}>
                {(bgPair) => (
                     <div  class={cn("h-full w-full flex flex-col items-center justify-center text-white")}
                     style={`background-color:${bgPair[0].color}`}
                     >
                      <h1 class="text-[40px] mb-[10px] -mt-[30px]">{bgPair[0].title}</h1>
                      <p>{bgPair[0].subTitle}</p>
                    </div>
                )}
            </For>
          </div>

          {/* Right side */}
          <div ref={slideLeft} class="absolute top-0 left-[35%] h-full w-[65%] transition-transform duration-500 ease-in-out">
            <For each={bgPairList}>
                {(bgPair) => (
                     <div class="bg-no-repeat bg-cover bg-center h-full w-full" style={`background-image: url('${bgPair[1]}')`}></div>
                )}
            </For>
          </div>


          <div>
            <button onclick={() => changeSlide("up")} class={cn("bg-white border-0 text-gray-400 cursor-pointer text-[16px] p-[15px] hover:text-gray-800 focus:outline-none","absolute left-[35%] top-1/2 z-[100]","-translate-x-full rounded-tl-md rounded-bl-md")}>
              <i class="fas fa-arrow-down"></i>
            </button>
            <button onclick={() => changeSlide("down")} class={cn("bg-white border-0 text-gray-400 cursor-pointer text-[16px] p-[15px] hover:text-gray-800 focus:outline-none","absolute left-[35%] top-1/2 z-[100]","-translate-y-full rounded-tr-md rounded-br-md")}>
              <i class="fas fa-arrow-up"></i>
            </button>
          </div>
      </div>
    </>
   )
}