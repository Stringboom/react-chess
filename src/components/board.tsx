/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { configType } from '../contexts/board-ctx'
import { pieces } from './pieces'

export interface  BoardProps {
    config: configType
}

export default function Board({ config }: BoardProps){

    const styles = {
        board: css({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
            width: 'fit-content',
            height: 'fit-content',
            margin: 'auto',
            padding: '10px',
            backgroundColor: '#703603',
            borderRadius: '10px'
        }),
        row: css({
            display: 'flex',
            flexDirection: 'row'
        }),
        square: css({
            width: '50px',
            height: '50px',
            border: '1px solid black',
            backgroundColor: '#cc7427',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '40px',
            userSelect: 'none',
            '&:hover': {
                backgroundColor: '#d63024!important',
                cursor: 'pointer'
            },
            '&:active': {
                backgroundColor: '#6e1b15!important'
            },
            '.row:nth-child(even) > &:nth-child(even)': {	
                backgroundColor: '#ebac75',
            },
            '.row:nth-child(odd) > &:nth-child(odd)': {	
                backgroundColor: '#ebac75'
            },
        })
    }

    return (
        <div css={styles.board}>
            <div className='row' css={styles.row}>
                <div css={styles.square} id="a8">{pieces[config.a8]}</div>
                <div css={styles.square} id="b8">{pieces[config.b8]}</div>
                <div css={styles.square} id="c8">{pieces[config.c8]}</div>
                <div css={styles.square} id="d8">{pieces[config.d8]}</div>
                <div css={styles.square} id="e8">{pieces[config.e8]}</div>
                <div css={styles.square} id="f8">{pieces[config.f8]}</div>
                <div css={styles.square} id="g8">{pieces[config.g8]}</div>
                <div css={styles.square} id="h8">{pieces[config.h8]}</div>
            </div>
            <div className='row' css={styles.row}>
                <div css={styles.square} id="a7">{pieces[config.a7]}</div>
                <div css={styles.square} id="b7">{pieces[config.b7]}</div>
                <div css={styles.square} id="c7">{pieces[config.c7]}</div>
                <div css={styles.square} id="d7">{pieces[config.d7]}</div>
                <div css={styles.square} id="e7">{pieces[config.e7]}</div>
                <div css={styles.square} id="f7">{pieces[config.f7]}</div>
                <div css={styles.square} id="g7">{pieces[config.g7]}</div>
                <div css={styles.square} id="h7">{pieces[config.h7]}</div>
            </div>
            <div className='row' css={styles.row}>
                <div css={styles.square} id="a6">{pieces[config.a6]}</div>
                <div css={styles.square} id="b6">{pieces[config.b6]}</div>
                <div css={styles.square} id="c6">{pieces[config.c6]}</div>
                <div css={styles.square} id="d6">{pieces[config.d6]}</div>
                <div css={styles.square} id="e6">{pieces[config.e6]}</div>
                <div css={styles.square} id="f6">{pieces[config.f6]}</div>
                <div css={styles.square} id="g6">{pieces[config.g6]}</div>
                <div css={styles.square} id="h6">{pieces[config.h6]}</div>
            </div>
            <div className='row' css={styles.row}>
                <div css={styles.square} id="a5">{pieces[config.a5]}</div>
                <div css={styles.square} id="b5">{pieces[config.b5]}</div>
                <div css={styles.square} id="c5">{pieces[config.c5]}</div>
                <div css={styles.square} id="d5">{pieces[config.d5]}</div>
                <div css={styles.square} id="e5">{pieces[config.e5]}</div>
                <div css={styles.square} id="f5">{pieces[config.f5]}</div>
                <div css={styles.square} id="g5">{pieces[config.g5]}</div>
                <div css={styles.square} id="h5">{pieces[config.h5]}</div>
            </div>
            <div className='row' css={styles.row}>
                <div css={styles.square} id="a4">{pieces[config.a4]}</div>
                <div css={styles.square} id="b4">{pieces[config.b4]}</div>
                <div css={styles.square} id="c4">{pieces[config.c4]}</div>
                <div css={styles.square} id="d4">{pieces[config.d4]}</div>
                <div css={styles.square} id="e4">{pieces[config.e4]}</div>
                <div css={styles.square} id="f4">{pieces[config.f4]}</div>
                <div css={styles.square} id="g4">{pieces[config.g4]}</div>
                <div css={styles.square} id="h4">{pieces[config.h4]}</div>
            </div>
            <div className='row' css={styles.row}>
                <div css={styles.square} id="a3">{pieces[config.a3]}</div>
                <div css={styles.square} id="b3">{pieces[config.b3]}</div>
                <div css={styles.square} id="c3">{pieces[config.c3]}</div>
                <div css={styles.square} id="d3">{pieces[config.d3]}</div>
                <div css={styles.square} id="e3">{pieces[config.e3]}</div>
                <div css={styles.square} id="f3">{pieces[config.f3]}</div>
                <div css={styles.square} id="g3">{pieces[config.g3]}</div>
                <div css={styles.square} id="h3">{pieces[config.h3]}</div>
            </div>
            <div className='row' css={styles.row}>
                <div css={styles.square} id="a2">{pieces[config.a2]}</div>
                <div css={styles.square} id="b2">{pieces[config.b2]}</div>
                <div css={styles.square} id="c2">{pieces[config.c2]}</div>
                <div css={styles.square} id="d2">{pieces[config.d2]}</div>
                <div css={styles.square} id="e2">{pieces[config.e2]}</div>
                <div css={styles.square} id="f2">{pieces[config.f2]}</div>
                <div css={styles.square} id="g2">{pieces[config.g2]}</div>
                <div css={styles.square} id="h2">{pieces[config.h2]}</div>
            </div>
            <div className='row' css={styles.row}>
                <div css={styles.square} id="a1">{pieces[config.a1]}</div>
                <div css={styles.square} id="b1">{pieces[config.b1]}</div>
                <div css={styles.square} id="c1">{pieces[config.c1]}</div>
                <div css={styles.square} id="d1">{pieces[config.d1]}</div>
                <div css={styles.square} id="e1">{pieces[config.e1]}</div>
                <div css={styles.square} id="f1">{pieces[config.f1]}</div>
                <div css={styles.square} id="g1">{pieces[config.g1]}</div>
                <div css={styles.square} id="h1">{pieces[config.h1]}</div>
            </div>
        </div>
    )


}
