import React from 'react'

export const GoToAlbum = (album) => <a target="_blank" href={album.external_urls.spotify}>{album.name}</a>

export const GoToMusic = (music) => <a target="_blank" href={music.external_urls.spotify}>{music.name}</a>

export const GoToArtists = (names) => {
    let retorno = names.map(e => {
        let link = e.external_urls.spotify
        let name = e.name
        let tag = <a target="_blank" href={link} key={e.id}>{name}</a>
        return tag
    })
    // console.log(retorno)
    // return retorno
    let key = 200
    return retorno.map(a => {
        let virg = <i>, </i>;
        key++
        return <i key={key}>{a} {retorno.length >= 2 ? virg : ''}</i>

    })
}
export const lastUpdate = (past) => {
    const now = new Date()
    const pastDate = new Date(past.substring(0, 10))
    const diff = Math.abs(now.getTime() - pastDate.getTime())
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export const timeTransform = (ms) => {
    let d = new Date(ms);
    let num = parseFloat(d.getUTCMinutes() + '.' + d.getUTCSeconds()).toFixed(2)
    return num.replaceAll('.', ':')
}

export let setRandomColor = () => `${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}`
