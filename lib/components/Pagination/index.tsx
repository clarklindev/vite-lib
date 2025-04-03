// Enhanced Pagination Component
interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Generate the page range for the buttons (dynamic range)
    const pageRange = () => {
        const range: number[] = [];
        const delta = 2; // Number of pages before and after the current page to display
        const start = Math.max(currentPage - delta, 1);
        const end = Math.min(currentPage + delta, totalPages);

        // Add pages to the range
        for (let i = start; i <= end; i++) {
            range.push(i);
        }

        // Handle "..." for non-contiguous pages
        if (start > 1) {
            range.unshift(1);
            if (start > 2) range.unshift(-1); // -1 will be used to display "..."
        }

        if (end < totalPages) {
            range.push(-1); // -1 will be used to display "..."
            range.push(totalPages);
        }

        return range;
    };

    return (
        <div className="flex gap-2 justify-center mt-4">
            {/* First Button */}
            <button className="px-3 py-1 border rounded disabled:opacity-50" onClick={() => onPageChange(1)} disabled={currentPage === 1}>
                First
            </button>

            {/* Previous Button */}
            <button className="px-3 py-1 border rounded disabled:opacity-50" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                Prev
            </button>

            {/* Page Number Buttons */}
            {pageRange().map((page, index) => (
                <button
                    key={index}
                    onClick={() => (page !== -1 ? onPageChange(page) : null)}
                    className={`px-3 py-1 border rounded ${page === currentPage ? 'bg-blue-500 text-white' : page === -1 ? 'cursor-default' : 'hover:bg-gray-200'}`}
                >
                    {page === -1 ? '...' : page}
                </button>
            ))}

            {/* Next Button */}
            <button className="px-3 py-1 border rounded disabled:opacity-50" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>

            {/* Last Button */}
            <button className="px-3 py-1 border rounded disabled:opacity-50" onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
                Last
            </button>
        </div>
    );
};

export { Pagination };
