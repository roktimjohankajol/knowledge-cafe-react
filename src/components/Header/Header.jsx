import profile from '../../assets/profile.png';
import '../../App.css'
const Header = () => {
    return (
        <div>
            <div className='header'>
                <h2 className="text-4xl">Knowledge Cafe</h2>
                <img src={profile} alt="" />
            </div>
            <hr style={{margin:'25px 0'}}/>
        </div>
    );
};

export default Header;