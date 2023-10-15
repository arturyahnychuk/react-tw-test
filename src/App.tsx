import item1SVG from "./assets/images/item1.svg"
import item2SVG from "./assets/images/itiem2.svg"
import item3SVG from "./assets/images/item3.svg"
import item4SVG from "./assets/images/item4.svg"

export default function App() {
  return (
    <div className="w-full bg-milk py-[110px] px-4 xl:px-0">
      <div className="w-full flex flex-col items-center max-w-[1372px] mx-auto">
        <h1 className="font-poppinsBold text-5xl leading-[55px] tracking-[-1%] text-center max-w-[730px] mb-[80px]">We make creative media that <span className="text-primary">adds value</span></h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
          <a href="#" className="w-full bg-white grid grid-cols-[145px,auto] 2xl:grid-cols-[183px,auto] rounded-[8px] overflow-hidden">
            <div className="flex grid grid-rows-[auto,auto]">
              <img className="w-full" src={item1SVG} alt="item1" />
              <img className="w-full" src={item2SVG} alt="item1" />
            </div>
            <div className="w-full flex flex-col gap-3 pl-[34px] pr-[30px] pt-[40px]">
              <h6 className="font-poppinsBold text-2xl leading-[32px]">Photography</h6>
              <ul className="flex flex-col">
                <li className="list-item font-nunitoBold tracking-[-1px] text-base leading-[26px]">Drone Photography</li>
                <li className="list-item font-nunitoBold tracking-[-1px] text-base leading-[26px]">Interiors</li>
                <li className="list-item font-nunitoBold tracking-[-1px] text-base leading-[26px]">Exterios / Architectural</li>
              </ul>
              <p className="font-nunitoSemibold tracking-[-1px] text-base leading-[24px]">Every photograph we produce finds the beauty in your property while serving as a profitable asset.</p>
            </div>
          </a>
          <a href="#" className="w-full bg-white grid grid-cols-[145px,auto] 2xl:grid-cols-[183px,auto] rounded-[8px] overflow-hidden">
            <div className="flex">
              <img className="w-full" src={item3SVG} alt="item1" />
            </div>
            <div className="w-full flex flex-col gap-3 pl-[34px] pr-[30px] pt-[40px]">
              <h6 className="font-poppinsBold text-2xl leading-[32px]">Virtual Staging</h6>
              <p className="font-nunitoSemibold tracking-[-1px] text-base leading-[24px]">Our staging will help you sell the potential of your space.</p>
              <p className="font-nunitoSemibold tracking-[-1px] text-base leading-[24px]">We can work off of our own photography or photos you provide.</p>
            </div>
          </a>
          <a href="#" className="w-full bg-white grid grid-cols-[145px,auto] 2xl:grid-cols-[183px,auto] rounded-[8px] overflow-hidden">
            <div className="flex grid grid-rows-[auto,auto]">
              <img className="w-full" src={item4SVG} alt="item1" />
            </div>
            <div className="w-full flex flex-col gap-3 pl-[34px] pr-[30px] pt-[40px]">
              <h6 className="font-poppinsBold text-2xl leading-[32px]">Renderings</h6>
              <ul className="flex flex-col">
                <li className="list-item font-nunitoBold tracking-[-1px] text-base leading-[26px]">Interiors</li>
                <li className="list-item font-nunitoBold tracking-[-1px] text-base leading-[26px]">Exteriors</li>
              </ul>
              <p className="font-nunitoSemibold tracking-[-1px] text-base leading-[24px]">Renderings are the gold standard in pre-construction marketing.</p>
            </div>
          </a>
          <a href="#" className="w-full bg-white grid grid-cols-[145px,auto] 2xl:grid-cols-[183px,auto] rounded-[8px] overflow-hidden">
            <div className="flex grid grid-rows-[auto,auto]">
              <img className="w-full" src={item1SVG} alt="item1" />
              <img className="w-full" src={item2SVG} alt="item1" />
            </div>
            <div className="w-full flex flex-col gap-3 pl-[34px] pr-[30px] pt-[40px]">
              <h6 className="font-poppinsBold text-2xl leading-[32px]">Photography</h6>
              <ul className="flex flex-col">
                <li className="list-item font-nunitoBold tracking-[-1px] text-base leading-[26px]">Drone Photography</li>
                <li className="list-item font-nunitoBold tracking-[-1px] text-base leading-[26px]">Interiors</li>
                <li className="list-item font-nunitoBold tracking-[-1px] text-base leading-[26px]">Exterios / Architectural</li>
              </ul>
              <p className="font-nunitoSemibold tracking-[-1px] text-base leading-[24px]">Every photograph we produce finds the beauty in your property while serving as a profitable asset.</p>
            </div>
          </a>
          <a href="#" className="w-full bg-white grid grid-cols-[145px,auto] 2xl:grid-cols-[183px,auto] rounded-[8px] overflow-hidden">
            <div className="flex">
              <img className="w-full" src={item3SVG} alt="item1" />
            </div>
            <div className="w-full flex flex-col gap-3 pl-[34px] pr-[30px] pt-[40px]">
              <h6 className="font-poppinsBold text-2xl leading-[32px]">Virtual Staging</h6>
              <p className="font-nunitoSemibold tracking-[-1px] text-base leading-[24px]">Our staging will help you sell the potential of your space.</p>
              <p className="font-nunitoSemibold tracking-[-1px] text-base leading-[24px]">We can work off of our own photography or photos you provide.</p>
            </div>
          </a>
          <a href="#" className="w-full bg-white grid grid-cols-[145px,auto] 2xl:grid-cols-[183px,auto] rounded-[8px] overflow-hidden">
            <div className="flex grid grid-rows-[auto,auto]">
              <img className="w-full" src={item4SVG} alt="item1" />
            </div>
            <div className="w-full flex flex-col gap-3 pl-[34px] pr-[30px] pt-[40px]">
              <h6 className="font-poppinsBold text-2xl leading-[32px]">Renderings</h6>
              <ul className="flex flex-col">
                <li className="list-item font-nunitoBold tracking-[-1px] text-base leading-[26px]">Interiors</li>
                <li className="list-item font-nunitoBold tracking-[-1px] text-base leading-[26px]">Exteriors</li>
              </ul>
              <p className="font-nunitoSemibold tracking-[-1px] text-base leading-[24px]">Renderings are the gold standard in pre-construction marketing.</p>
            </div>
          </a>
        </div>
        <button className="mt-[80px] w-full max-w-[315px] flex items-center justify-center rounded-[12px] bg-blueDark">
          <p className="text-md font-poppinsBold leading-[60px] tracking-[6px] uppercase text-white">Get Started</p>
        </button>
      </div>
    </div>
  )
}
