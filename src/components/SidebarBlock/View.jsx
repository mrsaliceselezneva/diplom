import styles from './styles.module.scss';

const View = (props) => {
    const { changeSelectBlockType, blockType, select } = props;

    const className = select ? styles.select_block_type : styles.block_type;

    return (
        <div
            onClick={changeSelectBlockType}
            className={className}>
            {blockType}
        </div>
    );
}

export default View;
