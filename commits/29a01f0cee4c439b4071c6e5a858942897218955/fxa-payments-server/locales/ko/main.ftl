# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


## branding

project-brand = Firefox 계정
-brand-name-mozilla = Mozilla
-brand-name-firefox = Firefox
document =
    .title = Firefox 계정

## general-aria

close-aria =
    .aria-label = 모달 닫기

## app error dialog

general-error-heading = 일반 응용 프로그램 오류
basic-error-message = 문제가 발생했습니다. 나중에 다시 시도하세요.
payment-error-1 = 결제를 승인하는 동안 문제가 발생했습니다. 다시 시도하거나 카드사에 연락하세요.
payment-error-2 = 결제를 승인하는 동안 문제가 발생했습니다. 카드사에 연락하세요.
expired-card-error = 신용 카드 유효 기간이 만료된 것 같습니다. 다른 카드를 사용해보세요.
insufficient-funds-error = 카드 잔액이 부족한 것 같습니다. 다른 카드를 사용해보세요.
withdrawal-count-limit-exceeded-error = 이 거래로 신용 한도를 초과한 것으로 보입니다. 다른 카드를 사용해보세요.
charge-exceeds-source-limit = 이 거래로 일일 신용 한도를 초과한 것으로 보입니다. 다른 카드를 사용하거나 24시간 후에 시도해 보세요.
instant-payouts-unsupported = 직불 카드가 즉시 결제를 할 수 있도록 설정되어 있지 않은 것 같습니다. 다른 직불 카드나 신용 카드를 사용해 보세요.
duplicate-transaction = 방금 전 동일한 거래가 이뤄진 것 같습니다. 결제 내역을 확인해 보세요.
coupon-expired = 프로모션 코드가 만료된 것 같습니다.
card-error = 거래를 처리할 수 없습니다. 신용 카드 정보를 확인한 후 다시 시도하세요.

## settings

settings-home = 계정 홈
settings-subscriptions-title = 구독 정보

## legal footer

terms = 서비스 약관
privacy = 개인정보처리방침

## plan details

product-plan-details-heading = 구독 설정 시작
product-plan-details-heading = 구독 설정 시작

##  $productName (String) - The name of the subscribed product.
##  $amount (Number) - The amount billed. It will be formatted as currency.

#  $intervalCount (Number) - The interval between payments, in days.
day-based-plan-details-amount =
    { $intervalCount ->
       *[other] { $productName }에서 { $intervalCount } 일마다 { $amount } 청구
    }
#  $intervalCount (Number) - The interval between payments, in weeks.
week-based-plan-details-amount =
    { $intervalCount ->
       *[other] { $productName }에서 { $intervalCount } 주마다 { $amount } 청구
    }
#  $intervalCount (Number) - The interval between payments, in months.
month-based-plan-details-amount =
    { $intervalCount ->
       *[other] { $productName }에서 { $intervalCount } 개월마다 { $amount } 청구
    }
#  $intervalCount (Number) - The interval between payments, in years.
year-based-plan-details-amount =
    { $intervalCount ->
       *[other] { $productName }에서 { $intervalCount } 년마다 { $amount } 청구
    }

## Product route

product-plan-error =
    .title = 구독 정보 읽기 문제
product-profile-error =
    .title = 프로필 로드 문제
product-customer-error =
    .title = 고객 정보 읽기 문제
product-plan-not-found = 사용 계획 찾을 수 없음
product-no-such-plan = 이 제품에 관련 구독 정보가 없음

## payment legal blurb

payment-legal-copy = { -brand-name-mozilla }는 안전한 결제 처리를 위해 Stripe를 사용합니다.
payment-legal-link = <a>Stripe 개인 정보 보호 정책</a> 살펴보기

## payment form

payment-name =
    .placeholder = 이름 (영문)
    .label = 신용 카드 내 이름
payment-cc =
    .label = 나의 카드
payment-ccn =
    .label = 카드 번호
payment-exp =
    .label = 만료일
payment-cvc =
    .label = CVC
payment-zip =
    .label = 우편 번호

##  $amount (Number) - The amount billed. It will be formatted as currency.

# $intervalCount (Number) - The interval between payments, in days.
payment-confirm-with-legal-links-day =
    { $intervalCount ->
       *[other] <termsOfServiceLink>서비스 약관</termsOfServiceLink>와 <privacyNoticeLink>개인 정보 보호 정책</privacyNoticeLink>에 따라 { -brand-name-firefox } 제품 개발사인 { -brand-name-mozilla }가 저의 결제 수단으로 <strong> { $amount } / { $intervalCount } 일 </strong>마다 구독을 취소할 때까지 청구하도록 승인합니다.
    }
#  $intervalCount (Number) - The interval between payments, in weeks.
payment-confirm-with-legal-links-week =
    { $intervalCount ->
       *[other] <termsOfServiceLink>서비스 약관</termsOfServiceLink>와 <privacyNoticeLink>개인 정보 보호 정책</privacyNoticeLink>에 따라 { -brand-name-firefox } 제품 개발사인 { -brand-name-mozilla }가 저의 결제 수단으로 <strong> { $amount } / { $intervalCount } 주 </strong>마다 구독을 취소할 때까지 청구하도록 승인합니다.
    }
#  $intervalCount (Number) - The interval between payments, in months.
payment-confirm-with-legal-links-month =
    { $intervalCount ->
       *[other] <termsOfServiceLink>서비스 약관</termsOfServiceLink>와 <privacyNoticeLink>개인 정보 보호 정책</privacyNoticeLink>에 따라 { -brand-name-firefox } 제품 개발사인 { -brand-name-mozilla }가 저의 결제 수단으로 <strong> { $amount } / { $intervalCount } 개월 </strong>마다 구독을 취소할 때까지 청구하도록 승인합니다.
    }
#  $intervalCount (Number) - The interval between payments, in years.
payment-confirm-with-legal-links-year =
    { $intervalCount ->
       *[other] <termsOfServiceLink>서비스 약관</termsOfServiceLink>와 <privacyNoticeLink>개인 정보 보호 정책</privacyNoticeLink>에 따라 { -brand-name-firefox } 제품 개발사인 { -brand-name-mozilla }가 저의 결제 수단으로 <strong> { $amount } / { $intervalCount } 년 </strong>마다 구독을 취소할 때까지 청구하도록 승인합니다.
    }
payment-confirm = <termsOfServiceLink>서비스 약관</termsOfServiceLink>와 <privacyNoticeLink>개인 정보 보호 정책</privacyNoticeLink>에 따라 Firefox 제품 개발사인 Mozilla가 저의 결제 수단으로 <strong> { $amount } / { $intervalCount } </strong>마다 구독을 취소할 때까지 청구하도록 승인합니다.

##

payment-cancel-btn = 취소
payment-update-btn = 업데이트
payment-pay-btn = 지금 지불
payment-validate-name-error = 이름을 입력하세요
payment-validate-zip-required = 우편 번호가 필요합니다
payment-validate-zip-short = 우편 번호가 너무 짧습니다

## subscription redirect

sub-redirect-ready = 가입 준비 완료
sub-redirect-copy = 잠시 시간을 내어 여러분의 경험을 알려주세요.
sub-redirect-skip-survey = 괜찮습니다, 다시 제품으로 이동합니다.

## fields

default-input-error = 필수 항목입니다
input-error-is-required = { $label }이(가) 필요합니다

## subscription upgrade

product-plan-upgrade-heading = 업그레이드 사항 검토
sub-update-failed = 업데이트 계획 실패
sub-update-title = 청구 정보
sub-update-card-ending = 카드 끝자리 번호 { $last }
sub-update-card-exp = 만료일 { $cardExpMonth }/{ $cardExpYear }
sub-update-copy =
    요금제가 즉시 변경되며 조정 된 요금이 청구됩니다.
    나머지 결제 주기에 대한 금액입니다. { $startingDate }로 부터
    전체 금액이 청구됩니다.

##  $amount (Number) - The amount billed. It will be formatted as currency.

#  $intervalCount (Number) - The interval between payments, in days.
sub-update-confirm-with-legal-links-day =
    { $intervalCount ->
       *[other] <termsOfServiceLink>서비스 약관</termsOfServiceLink>와 <privacyNoticeLink>개인 정보 보호 정책</privacyNoticeLink>에 따라 { -brand-name-firefox } 제품 개발사인 { -brand-name-mozilla }가 저의 결제 수단으로 <strong> { $amount } / { $intervalCount } 일 </strong>마다 구독을 취소할 때까지 청구하도록 승인합니다.
    }
#  $intervalCount (Number) - The interval between payments, in weeks.
sub-update-confirm-with-legal-links-week =
    { $intervalCount ->
       *[other] <termsOfServiceLink>서비스 약관</termsOfServiceLink>와 <privacyNoticeLink>개인 정보 보호 정책</privacyNoticeLink>에 따라 { -brand-name-firefox } 제품 개발사인 { -brand-name-mozilla }가 저의 결제 수단으로 <strong> { $amount } / { $intervalCount } 주 </strong>마다 구독을 취소할 때까지 청구하도록 승인합니다.
    }
#  $intervalCount (Number) - The interval between payments, in months.
sub-update-confirm-with-legal-links-month =
    { $intervalCount ->
       *[other] <termsOfServiceLink>서비스 약관</termsOfServiceLink>와 <privacyNoticeLink>개인 정보 보호 정책</privacyNoticeLink>에 따라 { -brand-name-firefox } 제품 개발사인 { -brand-name-mozilla }가 저의 결제 수단으로 <strong> { $amount } / { $intervalCount } 개월 </strong>마다 구독을 취소할 때까지 청구하도록 승인합니다.
    }
#  $intervalCount (Number) - The interval between payments, in years.
sub-update-confirm-with-legal-links-year =
    { $intervalCount ->
       *[other] <termsOfServiceLink>서비스 약관</termsOfServiceLink>와 <privacyNoticeLink>개인 정보 보호 정책</privacyNoticeLink>에 따라 { -brand-name-firefox } 제품 개발사인 { -brand-name-mozilla }가 저의 결제 수단으로 <strong> { $amount } / { $intervalCount } 년 </strong>마다 구독을 취소할 때까지 청구하도록 승인합니다.
    }

##

sub-update-submit = 업그레이드 확인
sub-update-indicator =
    .aria-label = 업그레이드 표시
sub-update-current-plan-label = 현재 구독 정보
sub-update-new-plan-label = 신규 구독 정보
sub-update-total-label = 총

## subscription upgrade plan details
## $amount (Number) - The amount billed. It will be formatted as currency.

#  $intervalCount (Number) - The interval between payments, in days.
plan-price-day =
    { $intervalCount ->
       *[other] { $amount } 매 { $intervalCount } 일마다
    }
#  $intervalCount (Number) - The interval between payments, in weeks.
plan-price-week =
    { $intervalCount ->
       *[other] { $amount } 매 { $intervalCount } 주마다
    }
#  $intervalCount (Number) - The interval between payments, in months.
plan-price-month =
    { $intervalCount ->
       *[other] { $amount } 매 { $intervalCount } 개월마다
    }
#  $intervalCount (Number) - The interval between payments, in years.
plan-price-year =
    { $intervalCount ->
       *[other] { $amount } 매 { $intervalCount } 년마다
    }

## subscription billing details
## $amount (Number) - The amount billed. It will be formatted as currency.

#  $intervalCount (Number) - The interval between payments, in days.
sub-plan-price-day =
    { $intervalCount ->
       *[other] { $amount } 매 { $intervalCount } 일마다
    }
#  $intervalCount (Number) - The interval between payments, in weeks.
sub-plan-price-week =
    { $intervalCount ->
       *[other] { $amount } 매 { $intervalCount } 주마다
    }
#  $intervalCount (Number) - The interval between payments, in months.
sub-plan-price-month =
    { $intervalCount ->
       *[other] { $amount } 매 { $intervalCount } 개월마다
    }
#  $intervalCount (Number) - The interval between payments, in years.
sub-plan-price-year =
    { $intervalCount ->
       *[other] { $amount } 매 { $intervalCount } 년마다
    }

## $date (Date) - The date for the next time a charge will occur.

sub-next-bill = 다음 청구일: { $date }

##

pay-update-card-exp = 만료 { $expirationDate }
pay-update-change-btn = 변경

## reactivate
## $name (String) - The name of the subscribed product.

reactivate-confirm-dialog-header = { $name }을 계속 사용하시겠습니까?
# $amount (Number) - The amount billed. It will be formatted as currency.
# $last (String) - The last 4 digits of the card that will be charged
# $endDate (Date) - Last day of product access
reactivate-confirm-copy =
    { $name }에 대한 접근은 계속되며 
    결제 주기 지불은 동일하게 유지됩니다. 다음 청구는
    { $amount }을 { $endDate }에 { $last }로 끝나는 카드로 결제됩니다.
# Alternate copy used when a payment method is not available, e.g. for free trials
# $amount (Number) - The amount billed. It will be formatted as currency.
# $endDate (Date) - Last day of product access
reactivate-confirm-without-payment-method-copy =
    { $name }에 대한 접근은 계속되며 결제 주기와
    지불은 동일하게 유지됩니다. 다음에는
    { $endDate }의 { $amount }을 청구 합니다.
reactivate-confirm-button = 재구독

##  $date (Date) - Last day of product access

reactivate-panel-date = { $date }에 구독을 취소하셨습니다.
reactivate-panel-copy = <strong> { $date } </strong>에 { $name }에 대한 접근 권한이 해지됩니다.
reactivate-success-copy = 감사합니다! 모두 준비되었습니다.
reactivate-success-button = 닫기

## subscription item
## $name (String) - The name of the subscribed product.
## $period (Date) - The last day of product access

sub-item-missing = 구독 정보 보기 문제
sub-item-missing-msg = 나중에 다시 시도하세요.
sub-item-no-such-plan = 관련 구독 정보가 없습니다.
sub-item-cancel-sub = 구독 취소
sub-item-stay-sub = 구독 유지
sub-item-cancel-msg =
    이후에는 더 이상 { $name }을 사용할 수 없습니다.
    { $period } 결제 주기의 마지막 날입니다.
sub-item-cancel-confirm =
    내 접근 정보 취소
    { $period } 중 { $name }
account-activated = 계정이 활성화되었습니다. <userEl/>

## subscription route index

sub-route-idx-updating = 결제 정보 업데이트중...
sub-route-idx-reactivating = 구독 재활성 실패
sub-route-idx-cancel-failed = 구독 취소 실패
sub-route-idx-contact = 연락하기
sub-route-idx-cancel-msg-title = 계속 진행할 수 없어 죄송합니다.
# $name (String) - The name of the subscribed product.
# $date (Date) - Last day of product access
sub-route-idx-cancel-msg =
    { $name } 구독이 취소되었습니다.
          <br />
          { $date }까지 { $name }에 계속 접근할 수 있습니다.
sub-route-idx-cancel-aside = 질문이 있으신가요? <a>{ -brand-name-mozilla } 도움말</a>을 방문하세요.
sub-subscription-error =
    .title = 구독 정보 읽기 문제
sub-customer-error =
    .title = 고객 정보 읽기 문제
sub-billing-update-success = 결제 정보가 성공적으로 업데이트되었습니다.

## subscription create

sub-guarantee = 30 일 환불 보장

## plan-details

plan-details-header = 제품 세부 정보
plan-details-show-button = 상세 정보 보기
plan-details-hide-button = 상세 내용 숨기기
plan-details-total-label = 전체

## payment confirmation

payment-confirmation-alert = 다운로드하기
payment-confirmation-mobile-alert = 앱을 열지 않았습니까? <a>자세히 보기</a>
payment-confirmation-heading = { $displayName }님 감사합니다!
payment-confirmation-heading-bak = 감사합니다!
payment-confirmation-subheading = 확인 이메일 발송 완료
payment-confirmation-order-heading = 주문 정보
payment-confirmation-invoice-number = 영수증 # { $invoiceNumber }
payment-confirmation-billing-heading = 청구 완료
payment-confirmation-details-heading = 지불 상세 사항
payment-confirmation-amount = { $interval } 당 { $amount }

## $amount (Number) - The amount billed. It will be formatted as currency.

#  $intervalCount (Number) - The interval between payments, in days.
payment-confirmation-amount-day =
    { $intervalCount ->
       *[other] { $amount } 매 { $intervalCount } 일마다
    }
#  $intervalCount (Number) - The interval between payments, in weeks.
payment-confirmation-amount-week =
    { $intervalCount ->
       *[other] { $amount } 매 { $intervalCount } 주마다
    }
#  $intervalCount (Number) - The interval between payments, in months.
payment-confirmation-amount-month =
    { $intervalCount ->
       *[other] { $amount } 매 { $intervalCount } 개월마다
    }
#  $intervalCount (Number) - The interval between payments, in years.
payment-confirmation-amount-year =
    { $intervalCount ->
       *[other] { $amount } 매 { $intervalCount } 년마다
    }
payment-confirmation-cc-preview = 카드 끝자리 { $last4 }
payment-confirmation-download-button = 다운로드 계속 하기
