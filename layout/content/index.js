
import { TextBox } from '../../components';
import { PopularIcon } from '../icons';




export const Content = () => {



  return (
    <main className="border-x flex-1 ">
      <header className='sticky top-0 bg-white z-10 flex justify-between p-6 items-center border-b'>
        <span>
          <b>HOME</b>
        </span>
        <span>
          <PopularIcon className={"w-7 h-7"} />
        </span>
      </header>
      <TextBox />

      



    </main>
  )
}

