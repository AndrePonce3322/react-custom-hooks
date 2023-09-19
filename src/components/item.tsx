import CustomHooks from '../utils/customhooks.json';

export const CustomHookItem = ({ hookName }: { hookName: string }) => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="mt-4 text-3xl hover:underline">
        <span className="font-bold">#</span> {hookName}
      </h2>
      <ul>
        {CustomHooks["Hooks Adicionales"].map((hook, index) => (
          <li key={index} className="list-disc">
            {hook.nombre}
          </li>
        ))}
      </ul>
    </section>
  );
};
