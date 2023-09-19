import { IconChevronsDown } from "@tabler/icons-react"
import { IconReact } from "../icons/icons"

export const InitialPage = () => {
  return (<section
    id="initialPage"
    className="w-full flex bg-[#23272f] h-screen justify-center items-center text-center text-5xl gap-8 z-10"
  >
    <div className="flex justify-center flex-col gap-4 mb-20">
      <IconReact />
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-display lg:text-6xl self-center flex font-semibold leading-snug">
          React custom hooks
        </h1>
        <p
          className="text-4xl max-w-lg md:max-w-full py-1 text-center leading-snug self-center"
        >
          Aprenderás sobre las funcionalidades de los custom hooks
        </p>
      </div>
    </div>

    <span className="absolute left-0 bottom-0 w-full flex justify-center p-4 animate-bounce brightness-[0.6]"><IconChevronsDown /></span>
  </section>)
}