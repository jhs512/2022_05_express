# DB 생성
DROP DATABASE IF EXISTS exam2;
CREATE DATABASE exam2;
USE exam2;

# todo 테이블 생성
CREATE TABLE todo (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    reg_date DATETIME NOT NULL,
    perform_date DATETIME NOT NULL,
    content VARCHAR(200) NOT NULL,
    is_completed TINYINT UNSIGNED NOT NULL DEFAULT 0
);

# todo 데이터, 테스트용 데이터 생성
INSERT INTO todo
SET reg_date = NOW(),
perform_date = CONCAT(DATE(NOW()), ' 07:00:00'),
`content` = '기상';

INSERT INTO todo
SET reg_date = NOW(),
perform_date = CONCAT(DATE(NOW()), ' 07:30:00'),
`content` = '조깅';

INSERT INTO todo
SET reg_date = NOW(),
perform_date = CONCAT(DATE(NOW()), ' 08:00:00'),
`content` = '아침식사';
