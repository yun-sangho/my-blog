---
title: Functional programming in scala 수강후기
description: coursera funcional programming in scala 강의를 듣고 나서
date: 2020-04-18 11:04:27
category: log
thumbnail: './images/scala-thumb.png'
draft: false
---
![scala](./images/scala.png)

연초부터 coursera에서 [functional programming in scala](https://www.coursera.org/specializations/scala) 강의를 들었는데 한동안 진도를 나가지 못하다가 요 몇 주 동안 다시 마음을 잡고 밀린 것들을 한 번에 몰아 들어 결국 완강을 했다.

scala를 간단히 소개하면 java를 base로 기존 java의 단점들을 보완하고 함수형 프로그래밍의 요소를 추가한 언어이다. java를 base로 하기 때문에 jvm 상에서 구동된다.

scala에 관심을 가지게 된 계기는 크게 2가지이다.

* spark

  이전 프로젝트에서 spark를 사용해 data etl 작업을 진행했다. 대용량의 데이터를 이리저리 가지고 노는 것이 매력적이었다. 프로젝트에서는 pyspark를 사용했는데 spark를 조금 더 깊게 배워보고 싶다는 욕심이 생겼다. 오리지널 spark는 scala로 쓰여 있기 때문에 scala에 관심을 가지게 되었다.

* functional programming

  몇 년 전부터 javascript 생태계에서 가장 hot한 키워드는 함수형 프로그래밍이지 않은가 싶다. javascript를 다루면서 조금씩 함수형 프로그래밍에 관련해서 공부했는데 작은 함수들을 만들고 그 함수들을 결합해서 문제를 해결한다는 기본 컨셉이 흥미로웠다. scala에서 함수형 프로그래밍을 적극 활용하기 때문에 자연스레 흥미를 가지게 되었다.

instructor인 Martin Odersky는 scala의 창시자이다. 이번 강의에서는 scala의 특징들을 하나씩 소개하는데 어떤 의도로 scala를 만들었는지 그의 생각을 엿볼 수 있어서 좋았다. 강의에서 등장한 여러 특징을 가운데 3가지 특징이 가장 흥미로웠다.

* class method

  scala의 class method는 다음과 같은 특징을 가지고 있다.
  1. 여러 기호(+, -, *,  /, ++, :::, ...)들도 method 이름으로 사용할 수 있다.
  2. method를 호출할 때 parameter가 하나밖에 없다면 점과 괄호를 생략할 수 있다.
  
  위의 두 가지 특징을 활용하면 직관적인 코드를 작성할 수 있는데 아래의 sinppet으로 간단히 소개한다.

  ```scala
  // 분수 class
  class Rational(numer: Int, denom: Int) {
    def + (other: Rational): Rational = // 분수끼리의 덧셈
      new Rational(
        numer * other.denom + other.numer * denom,
        denom * other.denom
    )
  }

  val x = Rational(1, 3)
  val y = Rational(4, 5)

  x.+(y)
  x + y // 위의 코드와 아래코드는 같은 동작을 수행한다.
  ```

* pattern matching

  scala에서는 조건을 나타낼 때 if else문 외에도 pattern matching이라는 기능이 존재한다. 다른 언어의 switch 문과 비슷한데 훨씬 강력한 기능을 가지고 있다. 조건이 많아질 때 if / else 문 보다 pattern matching을 사용하면 깔끔하고 직관적인 코드를 작성할 수 있다. 아래는 scala 공식문서의 pattern matching 예제이다.

  ```scala
  abstract class Notification
  case class Email(sender: String, title: String, body: String) extends Notification
  case class SMS(caller: String, message: String) extends Notification
  case class VoiceRecording(contactName: String, link: String) extends Notification

  def showNotification(notification: Notification): String = {
    notification match { // class 별로 case를 나눌 수 있고 class property에도 바로 접근가능하다.
      case Email(sender, title, _) => // 변수 sender, title을 아래 line에서 바로 사용하고 있다.
        s"You got an email from $sender with title: $title"
      case SMS(number, message) =>
        s"You got an SMS from $number! Message: $message"
      case VoiceRecording(name, link) =>
        s"You received a Voice Recording from $name! Click the link to hear it: $link"
    }
  }
  ```

* for expression

  함수형 프로그래밍을 지원하는 언어답게 scala에서 map과 filter를 자주 활용한다. map과 filter가 많아지게 되면 한눈에 코드를 파악하기 어려울 때가 있는데 scala의 for 문을 사용하면 map과 filter를 조금 더 간결하게 표현할 수 있다.

  ```scala
  class Burger(name: String, hasCheese: Boolean)

  burgers = List(burger1, burger2, burger3, ...)

  burgers filter (b => b.hasCheese) map (b => b.name)
  for (b <- bugers if b.hasCheese) yield b.name // 위의 코드와 동일하게 작동한다.
  ```

강의를 들으면서 가장 힘들었던 건 새로운 code editor에 적응하는 것이엇다. 새로운 언어에 적응하기까지는 그렇게 오랜 시간이 걸리지 않았는데 새로운 code editor를 다루는 것은 너무 어색했다. scala가 기존에 사용하던 vscode에서 원활히 작동하지 않아 intellij idea를 사용했는데 다른 단축키와 인테페이스에 적응하느라 애먹었다.

그리고 처음 프로그래밍을 배우는 사람들을 대상으로 하는 강의는 아니기 때문에 이전에 들었던 강의들보다 다소 난의도가 있는 편이였다. 함수형 프로그래밍을 다루는 만큼 대부분의 예제나 문제를 recursion을 활용해 접근하는데 recursion에 익숙하지 않은 나는 한눈에 코드를 이해하는 데는 조금 어려움이 있었다.

scala의 제작자가 강의를 진행해서인지 강의를 듣는 동안 scala에는 제작자의 생각이 굉장히 뚜렷하게 드러난다는 생각을 많이 했다. 또 java라는 성숙한 언어를 base로 하고 있기 때문에 언어가 탄탄하다는 느낌도 많이 받았다.(javascript를 좋아하지만 javascript가 정말 귀여워 보였다.)

다음 강의도 존재하는데 이번 강의에서는 scala 자체에 관해서 주로 다루었다면 다음 강의에서는 함수형 프로그래밍에 관해 집중적으로 다룬다고 한다. 지금의 여새를 몰아 다음 강의도 빠르게 완강해보겠다.