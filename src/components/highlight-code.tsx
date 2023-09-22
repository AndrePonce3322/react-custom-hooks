import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { IconCopyM } from '../icons/icons';
import { IconCheck } from '@tabler/icons-react';

export const HighlightCode = ({ code, language = "jsx" }: { code: string, language?: string }) => {

  const [isCopied, setIsCopied] = useState(false);

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text)
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000)
  }

  return (<section className="w-full overflow-hidden rounded-md flex flex-col">
    <div className=" flex items-center relative text-gray-200 bg-slate-700 px-4 py-2 text-xs font-sans justify-between rounded-t-md">
      <span>Example code</span>
      <button className="flex ml-auto gap-2 items-center ouline-none" onClick={() => {
        copyCode(code)
      }}>

        {isCopied ? <IconCheck height={16} width={16} /> : <IconCopyM />}
        <span>{isCopied ? 'Copied!' : 'Copy code'}</span>
      </button>
    </div>

    <SyntaxHighlighter language={language} style={atomOneDark} wrapLongLines={true} customStyle={{ padding: 16 }}>
      {code}
    </SyntaxHighlighter>
  </section>)
}