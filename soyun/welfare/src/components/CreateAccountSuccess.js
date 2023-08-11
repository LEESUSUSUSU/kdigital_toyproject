import {useParams} from "react-router-dom";
const CreateAccountSuccess = () => {


    const newUsername = useParams().newUsername;


    const closeModal = () => {

        window.close();
    }
    return(
        <div className = "CreateAccountSuccess">
            <div>{newUsername}님 가입을 환영합니다.</div>
            <br /><br />
            <button onClick={closeModal}>닫기</button>
        </div>
    )
}

export default CreateAccountSuccess;