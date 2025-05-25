import React from "react";
import { useThemeStore } from "../store/useThemeStore";

const Settings = () => {
  const {setTheme}=useThemeStore()


  return (

    <div >
    <h1 className="text-center mt-10 font-extrabold text-3xl">Themes</h1>
    
    <div className='rounded-box grid grid-cols-2 gap-4 mt-4 pb-10 mb-0 px-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-8 lg:grid-cols-5'>
      
      <div  onClick={()=>{setTheme("light")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="light"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="light"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">light</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div  onClick={()=>{setTheme("dark")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="dark"
        data-act-class="outline-base-content!"
      >
        
          <div
            data-theme="dark"
            className="bg-base-100 text-base-content w-full font-sans"
          >
            <div className="grid grid-cols-5 grid-rows-3">
              <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
              <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
              <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                <div className="font-bold">dark</div>{" "}
                <div className="flex flex-wrap gap-1">
                  <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                    <div className="text-primary-content text-sm font-bold">A</div>
                  </div>{" "}
                  <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                    <div className="text-secondary-content text-sm font-bold">
                      A
                    </div>
                  </div>{" "}
                  <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                    <div className="text-accent-content text-sm font-bold">A</div>
                  </div>{" "}
                  <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                    <div className="text-neutral-content text-sm font-bold">A</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     

      <div  onClick={()=>{setTheme("cupcake")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="cupcake"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="cupcake"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">cupcake</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("bumblebee")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="bumblebee"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="bumblebee"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">bumblebee</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("emerald")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="emerald"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="emerald"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">emerald</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("corporate")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="corporate"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="corporate"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">corporate</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={()=>{setTheme("synthwave")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="synthwave"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="synthwave"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">synthwave</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={()=>{setTheme("retro")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="retro"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="retro"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">retro</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={()=>{setTheme("cyberpunk")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="cyberpunk"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="cyberpunk"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">cyberpunk</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={()=>{setTheme("valentine")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="valentine"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="valentine"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">valentine</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={()=>{setTheme("halloween")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="halloween"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="halloween"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">halloween</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={()=>{setTheme("garden")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="garden"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="garden"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">garden</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={()=>{setTheme("forest")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="forest"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="forest"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">forest</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={()=>{setTheme("aqua")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="aqua"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="aqua"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">aqua</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={()=>{setTheme("lofi")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="lofi"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="lofi"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">lofi</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={()=>{setTheme("pastel")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="pastel"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="pastel"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">pastel</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onClick={()=>{setTheme("fantasy")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="fantasy"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="fantasy"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">fantasy</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("wireframe")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="wireframe"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="wireframe"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">wireframe</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("black")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="black"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="black"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">black</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("luxury")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="luxury"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="luxury"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">luxury</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("dracula")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="dracula"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="dracula"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">dracula</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("cmyk")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="cmyk"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="cmyk"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">cmyk</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("autumn")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="autumn"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="autumn"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">autumn</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("business")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="business"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="business"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">business</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("acid")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="acid"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="acid"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">acid</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("lemonade")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="lemonade"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="lemonade"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">lemonade</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("night")}} 
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="night"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="night"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">night</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("coffee")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="coffee"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="coffee"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">coffee</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("winter")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="winter"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="winter"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">winter</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("dim")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="dim"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="dim"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">dim</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("nord")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="nord"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="nord"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">nord</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("sunset")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="sunset"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="sunset"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">sunset</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("caramellatte")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="caramellatte"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="caramellatte"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">caramellatte</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("abyss")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="abyss"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="abyss"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">abyss</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  onClick={()=>{setTheme("silk")}}
        className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline-2 outline-offset-2 outline-transparent cursor-pointer"
        data-set-theme="silk"
        data-act-class="outline-base-content!"
      >
        <div
          data-theme="silk"
          className="bg-base-100 text-base-content w-full font-sans"
        >
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="bg-base-200 col-start-1 row-span-2 row-start-1"></div>{" "}
            <div className="bg-base-300 col-start-1 row-start-3"></div>{" "}
            <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
              <div className="font-bold">silk</div>{" "}
              <div className="flex flex-wrap gap-1">
                <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-primary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-secondary-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-accent-content text-sm font-bold">A</div>
                </div>{" "}
                <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                  <div className="text-neutral-content text-sm font-bold">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Settings;
