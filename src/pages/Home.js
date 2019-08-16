import React, {Component} from 'react';
import protoTypes from 'prop-types';

class Home extends Component{
    render(){
        return(
            <div>
                <h4>홈화면</h4>
                <a href="board">게시판</a><br/>
                <a href="member">회원</a>
            </div>
        );
    }
}

export default Home;