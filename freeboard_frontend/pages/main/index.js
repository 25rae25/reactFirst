import { Wrapper, Title, WriterWrapper, InputWrapper, Label, Writer, Subject, Password, Contents, ZipcodeWrapper, Zipcode,
	Address, SearchButton
} from '../../styles/index.js'

export default function BoardNewPage() {
	return(
		<Wrapper>
			<Title>게시글 등록</Title>
			<WriterWrapper>
				<InputWrapper>
					<Label>작성자</Label>
					<Writer type="text" placeholder="이름을 적어주세요." />
				</InputWrapper>
				<InputWrapper>
					<Label>비밀번호</Label>
					<Password type="password" placeholder="비밀번호를 작성해주세요." />
				</InputWrapper>
			</WriterWrapper>
			<InputWrapper>
				<Label>제목</Label>
				<Subject type="text" placeholder="제목을 작성해주세요." />
			</InputWrapper>
			<InputWrapper>
				<Label>내용</Label>
				<Contents placeholder="내용을 작성해주세요." />
			</InputWrapper>
			<InputWrapper>
				<Label>주소</Label>
				<ZipcodeWrapper>
					<Zipcode placeholder="07250" readOnly />
					<SearchButton>우편번호 검색</SearchButton>
				</ZipcodeWrapper>
				<Address readOnly />
				<Address />
			</InputWrapper>
		</Wrapper>
	)
}