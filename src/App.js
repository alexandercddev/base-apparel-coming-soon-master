/**
 * @author: alexandercds
 * @description: 
 * @date: 08/septiembre/2021 
**/
import './assets/scss/App.scss';
import Image from './components/Image';
import InputWithButton from './components/InputWithButton';
import Paragraph from './components/Paragraph';
import Title from './components/Title';

const App = (props) => {
    return (
        <div className="card">
            <div className="left"> 
                <Title>
                    We're
                </Title>
                <Paragraph>

                </Paragraph>
                <InputWithButton />
            </div>
            <div className="right">
                <Image />
            </div> 
        </div>
    );
 }
 
 export default App;
 