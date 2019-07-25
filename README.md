## DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :groups, through: :members
- has_many :members
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|

### Association
- has_many :users, through: :members
- has_many :members
- has_many :messages

## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|text|text|
|image|text|

### Association
- belongs_to :user
- belongs_to :group

## 使い方

①新規登録<br>
テスト用アカウント：Email・・・test1@gmail.com<br>
               ：password・・・test1111<br>
上記を入力しloginボタンを押下してください。<br>

<img width="400" alt="chat-space_sign-in" src="https://user-images.githubusercontent.com/50900728/61839197-a6b33c80-aec7-11e9-8571-70571333c75d.png">

②メインページにてグループを選択

<img width="400" alt="chat-space_main_1" src="https://user-images.githubusercontent.com/50900728/61839298-06a9e300-aec8-11e9-8fd3-c1bbc2611cee.png">

③メッセージ（画像）送信

<img width="400" alt="chat-space_main_2" src="https://user-images.githubusercontent.com/50900728/61839503-c1d27c00-aec8-11e9-82d8-0e9c6ed64fd0.png">

④メッセージ送信のデモ

<img width="400" alt="chat-space_main_3" src="https://user-images.githubusercontent.com/50900728/61839570-078f4480-aec9-11e9-8f90-ec2b388384e6.gif">

<img width="400" alt="chat-space_main_4" src="https://user-images.githubusercontent.com/50900728/61839569-078f4480-aec9-11e9-9681-15d03c7696b9.gif">




