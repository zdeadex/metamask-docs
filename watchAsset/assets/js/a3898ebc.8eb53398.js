"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={description:"Register a token with users using wallet_watchAsset.",sidebar_position:6},s="Register a token with users",i={unversionedId:"how-to/register-token",id:"how-to/register-token",title:"Register a token with users",description:"Register a token with users using wallet_watchAsset.",source:"@site/wallet/how-to/register-token.md",sourceDirName:"how-to",slug:"/how-to/register-token",permalink:"/watchAsset/wallet/how-to/register-token",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/register-token.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Register a token with users using wallet_watchAsset.",sidebar_position:6},sidebar:"walletSidebar",previous:{title:"Use Sign-In with Ethereum",permalink:"/watchAsset/wallet/how-to/use-siwe"},next:{title:"Register a contract's method names",permalink:"/watchAsset/wallet/how-to/register-method-names"}},l={},c=[{value:"Register an ERC-20 token",id:"register-an-erc-20-token",level:2},{value:"Register NFTs",id:"register-nfts",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"register-a-token-with-users"},"Register a token with users"),(0,a.kt)("p",null,"When a user opens MetaMask, they're shown a variety of assets, including tokens.\nBy default, MetaMask detects some major ERC-20 tokens and displays them, but for most custom ERC-20\ntokens, the user must ",(0,a.kt)("a",{parentName:"p",href:"https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask#h_01FWH492CHY60HWPC28RW0872H"},"register the token\nmanually"),".\nThis process involves the user interacting with contract addresses, and is error-prone."),(0,a.kt)("p",null,"MetaMask also supports displaying a user's NFTs in their wallet, but MetaMask doesn't detect and\ndisplay the NFTs by default.\nThe user must ",(0,a.kt)("a",{parentName:"p",href:"https://support.metamask.io/hc/en-us/articles/360058238591-NFT-tokens-in-your-MetaMask-wallet"},"explicitly turn on NFT autodetection or add their NFTs\nmanually"),".\nMoreover, NFT autodetection only detects NFTs on Ethereum Mainnet."),(0,a.kt)("p",null,"You can improve the security and experience of users registering your ",(0,a.kt)("a",{parentName:"p",href:"#register-an-erc-20-token"},"ERC-20 token"),"\nor their ",(0,a.kt)("a",{parentName:"p",href:"#register-nfts"},"NFTs")," on their MetaMask interface by using the\n",(0,a.kt)("a",{parentName:"p",href:"/watchAsset/wallet/reference/rpc-api#wallet_watchasset"},(0,a.kt)("inlineCode",{parentName:"a"},"wallet_watchAsset"))," RPC method.\n",(0,a.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset")," provides a friendly interface that prompts users to add tokens to their wallet,\nwithout having to interact with contract addresses."),(0,a.kt)("admonition",{title:"Adding NFTs",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"With ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset"),", you can prompt users to add their NFTs even when they have NFT\nautodetection disabled.\nYou can also display NFTs from networks other than Ethereum Mainnet.")),(0,a.kt)("h2",{id:"register-an-erc-20-token"},"Register an ERC-20 token"),(0,a.kt)("p",null,"To prompt users to register an ERC-20 token, you can add something like the following to your\nproject script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const tokenAddress = '0xd00981105e61274c8a5cd5a88fe7e037d935b513';\nconst tokenSymbol = 'TUT';\nconst tokenDecimals = 18;\nconst tokenImage = 'http://placekitten.com/200/300';\n\ntry {\n  // 'wasAdded' is a boolean. Like any RPC method, an error can be thrown.\n  const wasAdded = await ethereum.request({\n    method: 'wallet_watchAsset',\n    params: {\n      type: 'ERC20',\n      options: {\n        address: tokenAddress, // The address of the token.\n        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 characters.\n        decimals: tokenDecimals, // The number of decimals in the token.\n        image: tokenImage, // A string URL of the token logo.\n      },\n    },\n  });\n\n  if (wasAdded) {\n    console.log('Thanks for your interest!');\n  } else {\n    console.log('Your loss!');\n  }\n} catch (error) {\n  console.log(error);\n}\n")),(0,a.kt)("p",null,"For more examples, the following are live web dapps that let you enter your token details and share\nthem using a simple web link:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vittominacori.github.io/watch-token/create/"},"WatchToken")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://metamask.github.io/Add-Token/#edit"},"Add Token dapp"))),(0,a.kt)("h2",{id:"register-nfts"},"Register NFTs"),(0,a.kt)("p",null,"To prompt users to add an NFT, you can add something like the following to your project script.\n",(0,a.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset")," supports both ERC-721 and ERC-1155 NFT standards."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"try {\n  // 'wasAdded' is a boolean. Like any RPC method, an error can be thrown.\n  const wasAdded = await ethereum.request({\n    method: 'wallet_watchAsset',\n    params: {\n      type: 'ERC721`, // or 'ERC1155'\n      options: {\n        address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e', // The address of the token.\n        tokenId: '1', // ERC-721 or ERC-1155 token ID.\n      },\n    },\n  });\n\n  if (wasAdded) {\n    console.log('User successfully added the token!');\n  } else {\n    console.log('User did not add the token.');\n  }\n} catch (error) {\n  console.log(error);\n}\n")))}p.isMDXComponent=!0}}]);