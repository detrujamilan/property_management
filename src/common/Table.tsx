import React, {useState} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ASC from "../assets/svg/ASC-arrow.svg?react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import DEC from "../assets/svg/DEC-arrow.svg?react"
import {useDynamicViewport} from "@/hooks/vhConverter.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ViewIcon from "../assets/svg/view.svg?react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import DeleteIcon from "../assets/svg/deleteIcon.svg?react"


type TableProps<T> = {
    data: T[];
    columns: { key: keyof T; label: string }[];
    isFilter: boolean;
    isPagination: boolean;
    handleOpenViewModal: (row: T) => void;
};

export const Table = <T, >({data, columns, isFilter, isPagination, handleOpenViewModal}: TableProps<T>) => {
    const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "asc" | "desc" } | null>(null);
    const [filterText, setFilterText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);


    const rowsPerPage = 7;

    // Sorting
    const sortedData = React.useMemo(() => {
        if (!sortConfig) return data;
        return [...data].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];
            if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
            return 0;
        });
    }, [data, sortConfig]);


    // Filtering
    const filteredData = React.useMemo(() => {
        return sortedData.filter((row) =>
            columns.some((column) =>
                String(row[column.key]).toLowerCase().includes(filterText.toLowerCase())
            )
        );
    }, [sortedData, filterText, columns]);

    // Pagination
    const paginatedData = React.useMemo(() => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        return filteredData.slice(startIndex, startIndex + rowsPerPage);
    }, [filteredData, currentPage, rowsPerPage]);

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    // Handlers
    const handleSort = (key: keyof T) => {
        setSortConfig((prev) => {
            if (prev && prev.key === key) {
                return {key, direction: prev.direction === "asc" ? "desc" : "asc"};
            }
            return {key, direction: "asc"};
        });
    };

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value);
        setCurrentPage(1); // Reset to first page on filter change
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const dynamicVh = useDynamicViewport(513, "vh");
    return (
        <div>
            {/* Filter Input */}
            {isFilter && (
                <input
                    type="text"
                    placeholder="Filter..."
                    value={filterText}
                    onChange={handleFilterChange}
                    className={"mb-[10px] p-1"}
                />
            )}

            {/* Table */}
            <div className="border border-pattensBlue rounded-[10px] overflow-auto ">
                <table className="relative w-full">
                    <thead>
                    <tr>
                        <th>
                            SL
                        </th>
                        {columns.map((column) => (
                            <th
                                className={"cursor-pointer"}
                                key={String(column.key)}
                                onClick={() => handleSort(column.key)}
                            >
                                <div className={"flex items-center"}>
                                    {column.label}
                                    <div className="pl-1">
                                        {sortConfig?.key === column.key &&
                                            (sortConfig.direction === "asc" ? <ASC/> : <DEC/>)}
                                    </div>
                                </div>
                            </th>
                        ))}
                        <th>
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody className="overflow-y-auto" style={{maxHeight: `${dynamicVh}vh`}}>
                    {paginatedData.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className={"sticky"}>
                                {rowIndex + 1}.
                            </td>
                            {columns.map((column) => (
                                <td key={String(column.key)}>
                                    {String(row[column.key] ?? "")}
                                </td>
                            ))}
                            <td>
                                <div className={"flex items-center gap-3"}>
                                    <div
                                        onClick={() => handleOpenViewModal(row)}
                                        className="bg-bigStone flex justify-center items-center w-10 h-10 rounded cursor-pointer">
                                        <ViewIcon/>
                                    </div>
                                    <div
                                        className="bg-orange flex justify-center items-center w-10 h-10 rounded cursor-pointer">
                                        <DeleteIcon/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            {isPagination && (
                <div className="flex justify-end items-center gap-3 pt-6">
                    <button
                        className={`text-bigStone font-pmedium ${currentPage === 1 ? "text-gray-400" : "cursor-pointer"}`}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        return (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-md border font-pregular text-base ${
                                    currentPage === page
                                        ? "bg-blue-600 text-white"
                                        : "text-doveGray border-pattensBlue"
                                }`}
                            >
                                {page < 10 ? `0${page}` : page}
                            </button>
                        );
                    })}

                    <button
                        className={`text-bigStone font-pmedium ${currentPage === totalPages ? "text-gray-400" : "cursor-pointer"}`}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}

        </div>
    );
};
