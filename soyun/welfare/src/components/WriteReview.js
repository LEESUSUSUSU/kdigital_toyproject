import {useParams} from "react-router-dom";
import './WriteReviewCss.css';


const WriteReview = () => {

    const name = useParams().name;
    return(
        <>
        <div className="HelloWorld">Hello {name}</div>
        </>
        
    )

}

export default WriteReview;