import AddImage from '@/components/elements/AddImage'
import ShowImage from '@/components/elements/ShowImage'
import TextFieldNewPage from '@/components/elements/TextFieldNewPage'
import SubTitleNewPage from '@/components/elements/SubTitleNewPage'
import { REGISTERADVERTISE, infoGame } from '@/constants/constantNewPage'
import TitleNewPage from '@/components/elements/TitleNewPage'
import Optional from '@/components/elements/Optional'
import TextNewPage from '@/components/elements/TextNewPage'


export default function InfoGameSection() {
    return (
        <div className=' flex flex-col gap-4'>
            <div className=' flex flex-col gap-2'>
                <TitleNewPage text={infoGame.INFOGAMETITLE} />
                <SubTitleNewPage text={infoGame.INFOGAMESUBTITLE} />
            </div>
            <div>

                <TextFieldNewPage  label={<TextNewPage specialClass={'pr-3'} text={infoGame.GAMENAME} />} />
            </div>

            <div>
                <TextFieldNewPage label={<div className='flex  '>
                    <TextNewPage specialClass={'pr-3'} text={infoGame.GAMECONSOLE} />
                    <Optional />
                </div>} />
            </div>
            <div>
                <TextFieldNewPage label={<div className='flex  '>
                    <TextNewPage specialClass={'pr-3'} text={infoGame.GAMEDESCRIPTION} type={'textarea'} />
                    <Optional />
                </div>} />

            </div>




            <TextNewPage text={infoGame.GAMEIMAGES} />
            <AddImage />
        </div>
    )
}
