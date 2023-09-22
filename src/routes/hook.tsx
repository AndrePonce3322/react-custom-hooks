import { useParams } from "react-router-dom";
import ListHook from "../utils/customhookslist.json";
import CustomHookJson from "../utils/customNameList.json";
import { NotFoundPage } from "./notFound";
import { useEffect, useState } from "react";
import { HighlightCode } from "../components/highlight-code";

export interface hookInfo {
  nombre: string;
  funcionalidad: string;
  codigo: string;
}

export const Hook = () => {
  const { name } = useParams();
  const [hook, setHook] = useState({} as hookInfo);

  useEffect(() => {
    document.title = `${name} | CustomHooks`;

    const hook = ListHook[name];
    setHook(hook);
  }, [name])

  const hooks = CustomHookJson.AllCustomHooksName.find((hook) => hook === name);
  if (!hooks) return <NotFoundPage />

  return (
    <article className="w-full bg-[#1c1f26] border-t border-gray-700 p-16 px-32">
      <h1 className='text-3xl font-bold'>{hook.nombre}</h1>
      <p className='text-xl mt-4 mb-8'>{hook.funcionalidad}</p>
      <HighlightCode code={hook.codigo} />
    </article>
  )
}
