

interface ContentProps{
    data:Data[],
    id:number;
    handlePrevious:(id:number)=>void;
    handleNext:(id:number)=>void;
    handleDelete:(id:number)=>void;
}