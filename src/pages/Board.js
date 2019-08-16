import React, {Component} from 'react';
import axios from 'axios';
class Board extends Component{
    //생명주기 발생시 STS의 RESTful에 접근해서 정보를 가져옴.
    componentDidMount(){
        axios.get('http://127.0.0.1:8080/web/boardc.json?no=5')
        .then(res => {
            console.log(res.data);
        })
        .catch(function(error){
            console.log('에러가 발생함'+error);
        })
    }
    render(){
        return(
            <div>
                <h3>게시판</h3>
            </div>
        );
    }
}

export default Board;