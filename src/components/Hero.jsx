import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="summs_logo" className='w-28 object-contain' />

            <button
             type='button'
             onClick={() => window.open('https://github.com/snowzytech')}
             className='black_btn'
            >
                Github
            </button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden'/> <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>

        <h2 className='desc'>
        Introducing Summarize To You!, the innovative open-source article summarizer 
        that simplifies reading by condensing lengthy articles into clear and 
        concise summaries. With Summarize, you can stay informed without 
        spending hours reading through long-form content. Our advanced natural language processing technology 
        ensures that each summary accurately captures the most important information from the original article, saving you time and improving comprehension. Try Summarize 
        today and experience the benefits of effortless, streamlined reading!
        </h2>
    </header>

  )
}

export default Hero