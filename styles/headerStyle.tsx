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

        .btn_menu{
            position: absolute;
            right: 80px;
            top: 15px;
            border: none;
            background-color: transparent;
            font-size: 35px;
            cursor: pointer;
            outline: none;
        }

        .menu{
            position: absolute;
            background-color: #afb1b5;
            max-width: 500px;
            width: 100%;
            right: 0;
            top: 74px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px 5px;
            border-radius: 10px 0 0 10px;

            a:last-child{
                margin-bottom: 0;
            }
            a{
                margin-bottom: 20px;
                color: #000;
                font-weight: 600;
                width: 100%;
                text-align: center;
                padding: 10px 0;
                &:hover{
                    background:  -webkit-radial-gradient(30% 30%,#ed4b50,#b60108,#e91322);
                    color:#fff;
                    transition: 0.3s;
                }
            }
        }

        #open{
            display: flex;
        }
        #close{
            display: none;
        }
    }
    @media (max-width:735px){
        .head{
            .btn_menu{
                right:10px;
            }
        }
    }

    @media (max-width:540px){
        .head{
            .container{
                padding: 10px 0;
                .imagesBox{
                    display: flex;
                    align-items: center;
                    width: 70%;
                    &:after{
                        display: none;
                    }

                    .huawei, .ifpr{
                        max-width: 160px;
                    }
                }
            }

            .menu{
                top: 75px;
            }
        }
    } 

    @media (max-width:490px){
        .head{
            .menu{
                top: 65px;
            }
        } 
    } 
    @media (max-width:4350px){
        .head{
            .menu{
                top: 60px;
            }
        } 
    } 
`

export default HeaderStyle