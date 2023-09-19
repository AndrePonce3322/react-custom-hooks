import CustomHooks from '../utils/customhooks.json'
import { CustomHooksType } from '../interfaces/interface';
import { Link } from 'react-router-dom';

export const InitialCustomHooksList = () => {

  const hookCategories = Object.keys(CustomHooks) as (keyof CustomHooksType)[];

  return (
    <article className="w-full bg-[#1c1f26] border-t border-gray-700 p-16 px-32">

      {hookCategories.map((category, index) => (
        <section className='flex flex-col gap-3' key={index}>
          <h2 className='mt-4 text-3xl hover:underline'><span className='font-bold'>#</span> {category}</h2>
          <ul>
            {CustomHooks[category].map((hook, index) => (
              <li key={index} className='list-disc'><Link to={hook.nombre}>{hook.nombre}</Link></li>
            ))}
          </ul>
        </section>
      ))}

    </article>
  )
}