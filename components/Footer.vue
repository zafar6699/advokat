<template>
    <div>
        <footer>
            <div class="footer">
                <div class="umd-container">
                    <div class="top flex">
                        <div class="left">
                            <p class="address">
                                12 Neglinnaya Street, Moscow, 107016 Russia
                            </p>
                            <p class="tel">+8 800 300-30-00</p>
                            <p class="tel">+7 499 300-30-00</p>
                        </div>
                        <div class="right">
                            <div class="links">
                                <ul>
                                    <li>
                                        <nuxt-link to="/">
                                           {{$t('statistic')}}
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/">
                                           {{$t('news')}}
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/">
                                          {{$t('portals')}}
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="social">
                                <div class="messenger">
                                    <a href="#"
                                        ><svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40ZM21.5 13.333H25.666V10H21.5C20.9527 9.99987 20.4108 10.1076 19.9052 10.3169C19.3996 10.5263 18.9402 10.8332 18.5532 11.2202C18.1662 11.6072 17.8593 12.0666 17.6499 12.5722C17.4406 13.0778 17.3329 13.6197 17.333 14.167V16.667H14V20H17.333V30H20.667V20H24.833L25.667 16.667H20.667V14.167C20.667 13.706 21.039 13.333 21.5 13.333Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                    <a href="#"
                                        ><svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0ZM25.367 11H14.633C12.63 11 11 12.586 11 14.536V24.464C11 26.414 12.63 28 14.633 28H25.367C27.37 28 29 26.414 29 24.464V14.536C29 12.586 27.37 11 25.367 11ZM20 14.747C22.693 14.747 24.884 16.879 24.884 19.5C24.884 22.121 22.693 24.253 20 24.253C17.307 24.253 15.116 22.121 15.116 19.5C15.116 16.879 17.307 14.747 20 14.747ZM20 16.292C18.182 16.292 16.704 17.732 16.704 19.5C16.704 21.268 18.182 22.707 20 22.707C21.818 22.707 23.296 21.268 23.296 19.5C23.296 17.732 21.818 16.292 20 16.292ZM24.859 13.777C25.317 13.777 25.687 14.137 25.687 14.583C25.687 15.028 25.317 15.389 24.859 15.389C24.7517 15.3905 24.6452 15.3708 24.5455 15.331C24.4458 15.2913 24.3549 15.2324 24.2781 15.1575C24.2012 15.0827 24.1398 14.9934 24.0974 14.8948C24.055 14.7963 24.0324 14.6903 24.031 14.583C24.031 14.137 24.402 13.777 24.859 13.777Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                    <a href="#"
                                        ><svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40ZM29.948 15.193C29.9321 15.0807 29.9053 14.9701 29.868 14.863C29.7384 14.478 29.4914 14.1433 29.1617 13.906C28.832 13.6687 28.4362 13.5407 28.03 13.54H28.163C28.163 13.54 24.723 13.02 20.149 13C15.574 13.021 12.135 13.54 12.135 13.54H12.268C11.8033 13.5405 11.3542 13.7076 11.0022 14.0109C10.6501 14.3141 10.4184 14.7335 10.349 15.193C10.225 16.085 10.019 17.866 10 20C10.018 22.134 10.225 23.913 10.35 24.806C10.3663 24.9182 10.3927 25.0286 10.429 25.136C10.5583 25.5214 10.8054 25.8564 11.1353 26.0938C11.4653 26.3312 11.8615 26.4589 12.268 26.459H12.135C12.135 26.459 15.574 26.979 20.149 27C24.724 26.978 28.163 26.46 28.163 26.46H28.03C28.4947 26.4594 28.9438 26.2922 29.2957 25.9887C29.6477 25.6852 29.8791 25.2656 29.948 24.806C30.1659 23.213 30.2828 21.6078 30.298 20C30.2823 18.3919 30.1654 16.7864 29.948 15.193ZM23.155 20.433L19.057 23.411C18.9834 23.4646 18.8963 23.4967 18.8056 23.5038C18.7148 23.5109 18.6238 23.4928 18.5427 23.4513C18.4616 23.4099 18.3936 23.3469 18.3462 23.2691C18.2987 23.1914 18.2738 23.1021 18.274 23.011V17.06C18.2741 16.9691 18.2993 16.88 18.3468 16.8025C18.3943 16.725 18.4623 16.6621 18.5433 16.6207C18.6242 16.5794 18.715 16.5612 18.8057 16.5681C18.8963 16.575 18.9833 16.6068 19.057 16.66L23.155 19.636C23.2178 19.6819 23.2689 19.7419 23.3041 19.8112C23.3394 19.8806 23.3577 19.9572 23.3577 20.035C23.3577 20.1128 23.3394 20.1894 23.3041 20.2588C23.2689 20.3281 23.2178 20.3881 23.155 20.434V20.433Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                    <a href="#"
                                        ><svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40ZM30.525 14.989C30.164 15.169 29.169 15.531 28.265 15.621C28.898 15.26 29.712 14.266 29.983 13.452C29.441 13.814 28.085 14.356 27.452 14.356C26.729 13.633 25.644 13 24.559 13C22.299 13 20.672 14.898 20.672 17.158C20.672 17.429 20.672 17.791 20.762 18.062C17.78 17.972 14.254 16.345 12.266 13.723C11 15.803 12.085 18.333 13.531 19.237C13.079 19.237 12.175 19.147 11.814 18.785C11.814 20.232 12.446 22.04 14.887 22.763C14.435 22.853 13.531 22.853 13.169 22.763C13.259 23.938 14.977 25.475 16.785 25.475C16.153 26.198 13.712 27.554 11 27.192C12.898 28.277 14.977 29 17.328 29C23.836 29 29.169 23.757 28.898 17.249V17.068C29.441 16.616 29.983 15.893 30.525 14.988V14.989Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="umd-container">
                        <p class="end">
                            {{$t('adliya')}}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
    background: #4f4f4f;
    .footer {
        .top {
            padding: 64px 0;
            .left {
                p.address {
                    max-width: 288px;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 24px;
                    line-height: 32px;
                    color: #ffffff;
                    margin-bottom: 16px;
                }
                p.tel {
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 24px;
                    color: #ffffff;
                }
            }
        }
        .right {
            .links {
                ul {
                    display: flex;
                    align-items: center;
                    list-style: none;
                    margin-bottom: 48px;
                    li {
                        margin-left: 24px;
                        a {
                            display: block;
                            text-decoration: none;
                            font-style: normal;
                            font-weight: normal;
                            font-size: 16px;
                            line-height: 24px;
                            color: #fff;
                            &:hover{
                                color: #E88243;
                            }
                        }
                    }
                }
            }
            .social {
                .messenger {
                    display: flex;
                    justify-content: end;
                    a {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        margin-left: 8px;
                        &:hover{
                            background: #fff;
                            svg{
                                path{
                                    fill: #E88243;

                                }
                            }
                        }
                    }
                }
            }
        }
        .bottom {
            padding: 32px 0;
            border-top: 1px solid #6f6f6f;
            p.end {
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 24px;
                color: #fff;
            }
        }
    }
}
</style>
