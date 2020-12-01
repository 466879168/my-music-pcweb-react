import styled from 'styled-components'

export const AlbumWrapper=styled.div`
  .album0image{
    position:relative;
    width:${props=>props.width};
    height:${props=>props.size};
    overflow:hidden;
    margin-top:15px;
    img{
      width:${props=>props.size};
      height:${props=>props.size};
    }
    .cover{
      position:absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position:0 ${props=>props.bgp};
      text-indent:-9999px;
    }
  }
  .albun-info{
    font-size:12px;
  }
`