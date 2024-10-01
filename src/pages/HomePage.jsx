import { Content } from "../components/Contents/Content"

export const HomePage = ({selectedHashtag}) =>{
    return(
        <>
        <Content selectedHashtag={selectedHashtag} />
        </>
    )
}