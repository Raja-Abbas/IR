import React from 'react'
import Comment from '../images/comment.svg'

function whiteBox() {
  return (
    <div className="box rectangle">
        <div className="labelthree flex gap-0">
<p className="text-wrapperthree">Welcome to the future of Public Relations:</p>
<div><img src={Comment} alt='' className='mt-0 w-36 -ml-14'/></div>
</div>
<div className='flex justify-end gap-[4%] mt-10'>
<div className='max-w-[342px] max-h-[290px] bg-[#F5F5F5] py-4 px-4'>
    <div class="w-[262.26px] h-[48.99px] text-neutral-800 text-[22px] font-bold font-['Mont'] leading-7">Powered by the latest AI</div>
    <div class="w-[262.26px] h-[191.36px] text-zinc-500 text-sm font-normal font-['Mont'] leading-[25.20px]">GPT-Powered Outreach, 24/7 analysis of all relevant public event data to identify opportunities and pitch your company’s stories faster than the competition. <br/></div>
    </div>
    <div class="w-[342.60px] h-[418.05px] bg-neutral-100 py-4 px-4">
        <div class="w-[262.26px] h-[48.99px] text-neutral-800 text-[22px] font-bold font-['Mont'] leading-7">Build smarter relationships</div>
        <div class="w-[262.26px] h-[191.36px] text-zinc-500 text-sm font-normal font-['Mont'] leading-[25.20px]">Relentless customized global outreach based on AI-ranked relevancy to your brand. Generate responses that start, nurture, and build personal relationships with media influencers.   Put your execs and your company in the heart of the conversation. No agency. You own your relationships - not your PR firm. </div>
    </div>
</div>
</div>
  )
}

export default whiteBox