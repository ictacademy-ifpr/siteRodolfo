import styled from 'styled-components'

const HeaderStyle = styled.header`  
    #transparent{
        background-color: transparent;
    }
    #white{
        background-color: #fff;
    }
    .head{
        padding: 5px 10px;
        border-bottom: 1px solid #eaedf2 ;
        position: fixed;
        z-index: 2;
        width: 100%;
        cursor: pointer;

        .container{
            display: flex ;
            align-items: center;
            justify-content: center;
            
            .imagesBox{
                position: relative ;
                display: flex;
                align-items: center;
                &:after{
                    content: "";
                    position: absolute;
                    height: 50px;
                    width: 1px;
                    background: #afb1b5;
                    top: 25%;
                    right: 0;
                    left: 0;
                    margin: 0 auto;
                }

                .huawei{
                    margin-right: 50px;
                    max-width: 200px;
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }

                .ifpr{
                    max-width: 190px;
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }

    @media (max-width:500px){
        .head{
            .container{
                .imagesBox{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 98%;
                    &:after{
                        height: 35px;
                    }
                }
            }
        }
    }
`

export default HeaderStyle