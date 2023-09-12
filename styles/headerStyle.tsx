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
        border-bottom: 0px solid #eaedf2 ;
        position: fixed;
        z-index: 2;
        width: 100%;
        cursor: pointer;


        .container{
            display: flex ;
            align-items: center;
            justify-content: left;
            margin-left: 10px;
            
            
            .imagesBox{
                position: relative ;
                display: flex;
                align-items: center;
                // &:after{
                //     content: "";
                //     position: absolute;
                //     height: 50px;
                //     width: 1px;
                //     background: #afb1b5;
                //     top: 25%;
                //     right: 0;
                //     left: 0;
                //     margin: 0 auto;
                // }

                .huawei{
                    padding: 5px;
                    margin-right: 40px;
                    max-width: 150px;
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }

                .ifpr{
                    padding: 5px;
                    margin-right: 10px;
                    max-width: 140px;
                    width: 100%;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    
        .menu_links{
            position: absolute;
            display: flex;
            right: -90px;
            top: 37px;
            align-items: left;         
            justify-content: left;
            flex-direction: row;
            padding-right: 10px;

            border: none;

            .links{
                margin-right: 100px;
                right: 180px;
                top: 25px;
            }

            a{
                color: black;
                &:hover{
                    font-weight: bold;
                    transition: 0.1s;
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
            background-color: #ffff;
            max-width: 500px;
            width: 100%;
            right: 0;
            top: 74px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px 5px;
            border-radius: 30px 0 0 30px;
            transition: all 0.3s linear 0.3s;
            display: flex;

            a:last-child{
                margin-bottom: 0;
            }
            a{
                margin-bottom: 20px;
                color: #000;
                font-weight: 600;
                width: 100%;
                text-align: center;
                border-radius: 30px 0 0 30px;
                padding: 10px 0;
                &:hover{
                    background:  -webkit-radial-gradient(30% 30%,#5047ED,#5CE1E6);
                    color:#fff;
                    transition: 0.3s;
                }
            }
        }

        #open{
            width: 100%;
            height: 300px;
            
        }
        #close{
            width: 0%;
            height: 0px;
        
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