import css from './SearchBox.module.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
    const dispatch = useDispatch();
    const stateFilter = useSelector(selectFilter);

    const filterValueHandler = (e) => {
        dispatch(setFilter(e.target.value));
    }

    return (
        <>
            <input
                className={css.input}
                type="text"
                name='filter'
                placeholder="Filter"
                onChange={filterValueHandler}
                value={stateFilter}
            />
        </>
    );
}