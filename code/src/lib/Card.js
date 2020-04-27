import React from 'react'
import styled from 'styled-components/macro'


const Container = styled.div`
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  margin-bottom: 20px;
`

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`

const SecondaryText = styled.p`
  margin: 0;
  color: #6b6b6b;
`

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${props => props.url});
  background-size: cover;
  margin-right: 10px;
`

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`

const CoverImage = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
`

const Content = styled.div`
  padding: 20px;
`

// const ChildrenContent = styled.div`
//   background: papayawhip;
//   padding: 10px;
// `

export const Card = ({
  title,
  secondaryText,
  thumbnailUrl,
  coverImage,
  className,
  // children
}) => {
  return (
    <Container className={className}>
      {coverImage && <CoverImage src={coverImage} />}
      <Content>
        <TitleBar>
          {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
          <div>
            {title && <Title>{title}</Title>}
            {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
          </div>
        </TitleBar>
        {/* {children && <ChildrenContent>{children}</ChildrenContent>} */}
      </Content>
    </Container>
  )
}