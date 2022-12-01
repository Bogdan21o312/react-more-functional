import React, {FC, MouseEvent} from 'react';
import Input from "../@UI/Input";
import Select from "../@UI/Select/Select";

interface PostFilterProps {
    filter: any
    setFilter: any
}

const Index: FC<PostFilterProps> = ({filter, setFilter}) => {
    return (
        <div>
            <Input
                value={filter.query}
                onChange={(e: any) => setFilter({...filter, query:  e.target.value})}
                placeholder="Search..."
            />
            <Select options={
                [   { value: 'title', name: 'Title' },
                    { value: 'body', name: 'Text' },]
            } defaultValue={'Sort'} onChange={selectedSort => setFilter({...filter, sort: selectedSort})} value={filter.sort}/>
        </div>
    );
};

export default Index;