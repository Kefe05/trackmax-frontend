function Footer() {
  return (
    <div>
      <footer className='p-5 flex justify-between'>
      <div className='flex gap-3'>
        &copy;
        <div><span className='text-red-700'>Kingswrld,</span> All rights reserved</div>
      </div>
      <div className='flex flex-col '>
        <span>Template By <span className='text-red-700'> HTML Codex</span></span>
        <span>Copied from <span className='text-red-700'> ThemeWagon </span> </span>
      </div>
    </footer>
    </div>
  )
}

export default Footer
