import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    // const {reading_time} = blog;
    return (
        <div className="mb-12">
            <img className="w-full rounded-md" src={blog.cover} alt="" />
            <div className="flex justify-between py-8">
                <div className="flex gap-4">
                    <div>
                        <img className="w-12" src={blog.author_img} alt="" />
                    </div>
                    <div>
                        <p className="text-xl font-bold">{blog.author}</p>
                        <p>{blog.posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <p>{blog.reading_time} min read</p>
                    <button onClick={ () => handleAddToBookmark(blog)}><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl">{blog.title}</h2>
            <p className="py-4">
                {
                blog.hashtags.map( (hastag, idx) => <span key={idx}> <a href="">#{hastag}</a></span>)
                }
            </p>
            <button 
            onClick={ () => handleMarkAsRead(blog.reading_time)} className="underline text-[#6047EC]">Mark as read</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired, 
    handleMarkAsRead: PropTypes.func
}
export default Blog;