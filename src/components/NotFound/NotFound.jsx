import NavBar from '../NavBar/Navbar';
import imgNotFound from '/src/assets/NotFound.jpg'


function NotFound() {
    return (
        <>
            <NavBar />
            <div>
                <img src={imgNotFound} alt="Not found" />
            </div>

        </>
    )

}

export default NotFound;