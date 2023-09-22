import { useState, useEffect } from 'react';
import Board from '../components/board';

export type configType = { [key: string]: string }

export default function BoardCtx(){
    
    const [config, setConfig] = useState<configType>({ a1: 'R', a2: 'P', a3: '', a4: '', a5: '', a6: '', a7: 'p', a8: 'r', b1: 'N', b2: 'P', b3: '', b4: '', b5: '',b6: '', b7: 'p', b8: 'n', c1: 'B', c2: 'P', c3: '', c4: '', c5: '', c6: '', c7: 'p', c8: 'b', d1: 'Q', d2: 'P', d3: '', d4: '', d5: '', d6: '', d7: 'p', d8: 'q', e1: 'K', e2: 'P',e3: '',e4: '',e5: '',e6: '',e7: 'p',e8: 'k',f1: 'B',f2: 'P',f3: '',f4: '',f5: '',f6: '',f7: 'p',f8: 'b',g1: 'N',g2: 'P',g3: '',g4: '',g5: '',g6: '',g7: 'p',g8: 'n',h1: 'R',h2: 'P',h3: '',h4: '',h5: '',h6: '',h7: 'p',h8: 'r' })
    const [turn, setTurn] = useState<'white' | 'black'>('white')
    const [from, setFrom] = useState<string | undefined>(undefined)
    const [to, setTo] = useState<string | undefined>(undefined)

    function getPieceColor(piece: string) {
        return piece === piece.toUpperCase() ? 'white' : 'black'
    }

    function getPieceType(piece: string) {
        return piece.toLowerCase()
    }

    function getPieceFromSquare(square: string) {
        return config[square]
    }

    function hasPiece(square: string) {
        return config[square] !== ''
    }


    function diagonalMove(piece: string, from: string, to: string) {
        const fromFile = from[0].charCodeAt(0)
        const fromRank = parseInt(from[1])
        const toFile = to[0].charCodeAt(0)
        const toRank = parseInt(to[1])
        const fileDiff = Math.abs(fromFile - toFile)
        const rankDiff = Math.abs(fromRank - toRank)
        return fileDiff === rankDiff
    }

    function straightMove(piece: string, from: string, to: string) {
        const fromFile = from[0].charCodeAt(0)
        const fromRank = parseInt(from[1])
        const toFile = to[0].charCodeAt(0)
        const toRank = parseInt(to[1])
        return fromFile === toFile || fromRank === toRank
    }

    function knightMove(piece: string, from: string, to: string) {
        const fromFile = from[0].charCodeAt(0)
        const fromRank = parseInt(from[1])
        const toFile = to[0].charCodeAt(0)
        const toRank = parseInt(to[1])
        const fileDiff = Math.abs(fromFile - toFile)
        const rankDiff = Math.abs(fromRank - toRank)
        return (fileDiff === 2 && rankDiff === 1) || (fileDiff === 1 && rankDiff === 2)
    }

    function kingMove(piece: string, from: string, to: string) {
        const fromFile = from[0].charCodeAt(0)
        const fromRank = parseInt(from[1])
        const toFile = to[0].charCodeAt(0)
        const toRank = parseInt(to[1])
        const fileDiff = Math.abs(fromFile - toFile)
        const rankDiff = Math.abs(fromRank - toRank)
        return fileDiff <= 1 && rankDiff <= 1
    }

    function pawnMove(piece: string, from: string, to: string) {
        const fromFile = from[0].charCodeAt(0)
        const fromRank = parseInt(from[1])
        const toFile = to[0].charCodeAt(0)
        const toRank = parseInt(to[1])
        const fileDiff = Math.abs(fromFile - toFile)
        const rankDiff = Math.abs(fromRank - toRank)
        const isWhite = piece === piece.toUpperCase()
        const direction = isWhite ? 1 : -1
        return fileDiff === 0 && rankDiff === 1 * direction
    }

    function validMove(piece: string, from: string, to: string) {
        const pieceType = getPieceType(piece)
        switch(pieceType) {
            case 'p':
                return pawnMove(piece, from, to)
            case 'r':
                return straightMove(piece, from, to)
            case 'n':
                return knightMove(piece, from, to)
            case 'b':
                return diagonalMove(piece, from, to)
            case 'q':
                return straightMove(piece, from, to) || diagonalMove(piece, from, to)
            case 'k':
                return kingMove(piece, from, to)
            default:
                return false
        }
    }

    // function getValidMoves(piece: string, from: string) {
    //     const validMoves: string[] = []
    //     for (const square in config) {
    //         if (validMove(piece, from, square)) {
    //             validMoves.push(square)
    //         }
    //     }
    //     return validMoves
    // }

    function movePiece(from: string, to: string) {
        const piece = config[from]
        if (piece && validMove(piece, from, to)) {
            const newConfig = { ...config }
            newConfig[to] = piece
            newConfig[from] = ''
            setConfig(newConfig)
        }
    }

    function handleClick(e: MouseEvent) {

        const target = e.target as HTMLElement

        const block = target.id

        if(!block) return
        if(!hasPiece(block) && !from) return
        if(getPieceColor(getPieceFromSquare(block)) !== turn) return

        if(!from){
            setFrom(block)
        }else{
            setTo(block)
        }

    }

    useEffect(() => {
        const board = document.querySelector('body')
        board?.removeEventListener('click', handleClick)
        board?.addEventListener('click', handleClick)
        return () => {
            board?.removeEventListener('click', handleClick)
        }
    }, [from, to])

    useEffect(() => {
        if (from && to) {
            movePiece(from, to)
            setFrom(undefined)
            setTo(undefined)
            if(turn === 'white'){
                setTurn('black')
            }else{
                setTurn('white')
            }
        }
    }, [from, to])



    return (
        <Board config={config} />
    )
}
