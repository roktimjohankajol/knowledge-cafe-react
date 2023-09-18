import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <h2 className='bg-white p-5 rounded-md text-2xl mb-5 border text-[#6047EC] border-[#6047EC]'>Spent time on read : {readingTime} min</h2>
            <div className='bg-[#e3e3e3] p-5 rounded-md'>
                <h2 className='py-5 text-2xl'>Bookmarked Blogs : <strong>{bookmarks.length}</strong></h2>
                <div>
                    {
                        bookmarks.map( (bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    bookmark: PropTypes.object.isRequired,
    readingTime: PropTypes.object.isRequired
}
export default Bookmarks;