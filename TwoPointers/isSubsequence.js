// s is the subsequence of t

const isSubsequence = (s, t) => {
    let seqId = 0;

    for(let i =0; i<t.length; i++) {
        if(s.length > t.length) {
            return false;
        }
        if(seqId === s.length) {
            break;
        }
        if(t[i] == s[seqId]) {
            seqId += 1;
        }
    }
    return seqId === s.length;
}

