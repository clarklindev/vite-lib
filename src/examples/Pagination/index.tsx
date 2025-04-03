import { useState, useEffect } from 'react';

import { Pagination } from 'lib/components';

interface Post {
    id: number;
    title: string;
    body: string;
}

const PaginationExample = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState<Post[]>([]);
    const [totalPosts, setTotalPosts] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        async function fetchPosts() {
            // Fetch data from JSONPlaceholder with pagination
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${itemsPerPage}`);
            const data = await res.json();
            const totalCount = res.headers.get('X-Total-Count'); // Total items count for pagination
            setPosts(data);
            setTotalPosts(Number(totalCount));
        }

        fetchPosts();
    }, [currentPage]);

    return (
        <>
            <div>
                <h2>Paginated List from JSONPlaceholder</h2>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>

                <Pagination totalItems={totalPosts} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={setCurrentPage} />
            </div>
        </>
    );
};

export default PaginationExample;
