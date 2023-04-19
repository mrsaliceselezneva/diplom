import styles from './styles.module.scss';

function View({ changeSelectBlockType, blockType, select }) {
    return (
        <div
            onClick={changeSelectBlockType}
            className={select ? styles.select_game_type : styles.game_type}>
            {blockType}
        </div>
    );
}

export default View;
