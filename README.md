# nodeJsLogger
node js 운영 로그 

winston = > 운영 중 process log logger.xxx 

morgan => access log 

process log , access log 분기 처리

쿠버네티스 사용 중 pod가 다중으로 생기게 되면

파일이름이 겹치게 되어, 오류가 나는문제 발생
=>log file에 HOSTNAME 을 붙여줘서 각자 찍게 변경
=>다른 방법이 있을 것 같은데 좀 더 찾아봐야 할 것 같다.


참고 : https://www.npmjs.com/package/rotating-file-stream 
      
https://www.npmjs.com/package/winston
      
https://www.npmjs.com/package/morgan
