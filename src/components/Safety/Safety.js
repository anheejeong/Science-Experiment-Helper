import React, { useState } from "react";
import classes from './Safety.module.css';
import Card from "../Card/Card";

const Safety = () => {
    const [one, setOne] = useState(true);
    const [two, setTwo] = useState(true);
    const [three, setThree] = useState(true);
    const [four, setFour] = useState(true);

    const [oneP, setOneP] = useState(false);
    const [twoP, setTwoP] = useState(false);
    const [threeP, setThreeP] = useState(false);
    const [fourP, setFourP] = useState(false);

    const btnClickHandler = (event) => {
        const { target: { name } } = event;
        if (name === "one") {
            setTwo(!two);
            setThree(!three);
            setFour(!four);
            setOneP(!oneP);
        } else if (name === "two") {
            setOne(!one);
            setThree(!three);
            setFour(!four);
            setTwoP(!twoP);
        } else if (name === "three") {
            setOne(!one);
            setTwo(!two);
            setFour(!four);
            setThreeP(!threeP);
        } else if (name === "four") {
            setOne(!one);
            setTwo(!two);
            setThree(!three);
            setFourP(!fourP);
        }
    }


    return (
        <Card>
            <div className={classes.safety}>
                <h1>Scientific Experimental Safety Manual</h1>
                {one && <button name="one" onClick={btnClickHandler}>1. 응급상황 대응</button>}
                {oneP && <p>
                    <b>1. 안전사고 처리 과정</b><br />
                    1) 실험, 실습실 안전사고 발생 : 사고를 목격한 학생은 사고 발생 즉시 당황하지 말고 교사에게 알림<br />
                    2) 응급조치 CCC<br />
                    · Check(환자 수, 환자 상태, 주변 위험요소 파악, 필요 시 학생 대피 조치)<br />
                    · Call(관리자 및 보건교사에 보고 & 동료 교사에게 지원 요청)<br />
                    · Care(구급대가 올 때까지 또는 병원 도착까지 환자 보호, 병원 이송 시 반드시 교사 1인 동행)<br />
                    3) 원인 파악 : 사고 원인 및 피해 상황 파악<br />
                    <br /><b>2. 응급처치 방법</b><br />
                    1) 외상을 입은 경우
                    · 긁혔을 때 : 상처 부위를 씻고 소독한다.<br />
                    · 베였을 때 : 출혈부위를 압박하여 지혈한 뒤 소독한다.<br />
                    · 찔렸을 때 : 얕게 박힌 물체는 제거한 뒤 지혈 및 소독, 깊게 박힌 물체는 빼지 말고 수건 등으로 고정한 뒤 병원으로 이송한다.<br />
                    2) 감전된 경우<br />
                    · 전원을 빠르게 차단한다.<br />
                    · 구조자는 절연장갑이나 고무장갑을 착용하고, 전기기구게어 환자를 분리시킨다.<br />
                    · 상태가 위독한 경우 119로 신고한다.<br />
                    · 의식이 없을 경우 안전한 바닥에 눕히고 필요한 경우 심폐소생술을 실시한다.<br />
                    3) 화상을 입은 경우<br />
                    · 화상 원인과 환자 분리하기 : 귀금속, 반지와 같은 장신구와 꽉 끼는 옷은 제거한다.<br />
                    · 흐르는 차가운 물로 상처 부위 열기 제거하기<br />
                    · 상처 부위 붕대 감기<br />
                    <br /><b>3. 화재 발생 시 대처법<br /></b>
                    1) 화재가 발생한 경우<br />
                    · "불이야!" 라고 소리 질러 화재를 알리고 화재경보기 작동 및 119로 신고한다.<br />
                    · 교사의 지시에 따라 지정된 장소로 대피한다.<br />
                    · 화재가 발생한 곳은 문을 닫아 불이 번지는 것을 방지한다.<br />
                    · 연기가 심할 경우 젖은 수건이나 손으로 코와 입을 막고 자세를 낮추어 이동한다.<br />
                    2) 화재 상황 별 초기 진화 방법<br />
                    · 규모가 작은 불이 났을 때 : 방염담요나 소화기 등을 이용하여 진화한다.<br />
                    · 알코올램프가 넘어져 불이 붙었을 때 : 방염담요로 덮거나 방화사를 뿌려서 불을 끈다.<br />
                    · 전기 합선으로 불이 났을 때 : 누전 차단기의 스위치를 내리고 소화기를 이용하여 불을 끈다.<br />
                    · 옷에 불이 붙었을 때 : 바닥에 누운 뒤 방염담요나 젖은 실험복으로 덮어 불을 끈다.<br />
                </p>}
                {two && <button name="two" onClick={btnClickHandler}>2. 과학실험실 안전장구</button>}
                {three && <button name="three" onClick={btnClickHandler}>3. 화학 약품 관리</button>}
                {four && <button name="four" onClick={btnClickHandler}>4. 상황별 대처방안</button>}
            </div>
        </Card>
    );
}

export default Safety;