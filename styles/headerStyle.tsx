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

        .container{
            display: flex ;
            align-items: center;
            justify-content: space-between;
            
            .imagesBox{
                position: relative ;
                &:after{
                    content: "";
                    position: absolute;
                    height: 50px;
                    width: 1px;
                    background: #afb1b5;
                    top: 25%;
                    right: 48%;
                }

                .huawei{
                    margin-right: 50px;
                    max-width: 200px;
                }

                .ifpr{
                    max-width: 190px;
                }
            }
            nav{
                max-width: 400px;
                width: 100% ;
                ul{
                    display: flex ;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0 ;
                    padding: 0 ;
                    li{
                        list-style: none;
                        position: relative ;
                        a{
                            color: #605d5e;
                            font-size: 20px;
                            text-decoration: none;
                        }
                        &:hover{
                            a{
                                font-weight: 500;
                            }
                            &:after{
                                content: "";
                                position: absolute;
                                bottom: -10px;
                                left: 0;
                                right: 0;
                                height: 0.5em;
                                border-top: 2px solid #a70203;
                            }
                        }
                    }
                }
            }
        }
    }
`

export default HeaderStyle