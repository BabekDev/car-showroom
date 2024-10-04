export interface FilterProps {
    filterMark: string | null;
    filterModel: string | null;
    filterColor: string | null;
    setFilterMark: (value: string) => void;
    setFilterModel: (value: string) => void;
    setFilterColor: (value: string) => void;
}